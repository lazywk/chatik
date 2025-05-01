import { useEffect, useRef, useState } from 'react'

// Xabarlar uchun interfeys
interface Message {
  id: string
  content: string
  sender: string
  timestamp: string
}

// WebSocket holati uchun interfeys
interface WebSocketState {
  isConnected: boolean
  messages: Message[]
  error: string | null
}

// Hook opsiyalari uchun interfeys
interface WebSocketOptions {
  url: string
  onOpen?: () => void
  onClose?: () => void
  onError?: (error: Event) => void
}

const useWebSocket = ({
  url,
  onOpen,
  onClose,
  onError,
}: WebSocketOptions): WebSocketState & {
  sendMessage: (content: string, sender: string) => void
} => {
  const [state, setState] = useState<WebSocketState>({
    isConnected: false,
    messages: [],
    error: null,
  })
  const socketRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Agar ulanish allaqachon ochiq bo‘lsa, qayta ulanishni oldini olish
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      return
    }

    // WebSocket ulanishini yaratish
    const connect = () => {
      socketRef.current = new WebSocket(url)
      const socket = socketRef.current

      // Ulanish ochilganda
      socket.onopen = () => {
        setState((prev) => ({ ...prev, isConnected: true, error: null }))
        onOpen?.()
        if (reconnectTimeoutRef.current) {
          clearTimeout(reconnectTimeoutRef.current)
          reconnectTimeoutRef.current = null
        }
      }

      // Xabar kelganda
      socket.onmessage = (event: MessageEvent) => {
        console.log('event', event)

        try {
          const message: Message = JSON.parse(event.data)
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }))
        } catch (err) {
          console.error('Xabar parsing xatosi:', err)
        }
      }

      // Xato yuz berganda
      socket.onerror = (error: Event) => {
        setState((prev) => ({ ...prev, error: 'WebSocket xatosi' }))
        onError?.(error)
      }

      // Ulanish yopilganda
      socket.onclose = () => {
        setState((prev) => ({ ...prev, isConnected: false }))
        onClose?.()
        // 5 soniyadan keyin qayta ulanishga urinish
        reconnectTimeoutRef.current = setTimeout(connect, 5000)
      }
    }

    connect()

    // Tozalash
    return () => {
      if (socketRef.current) {
        socketRef.current.close()
        socketRef.current = null
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
        reconnectTimeoutRef.current = null
      }
    }
  }, [url]) // Faqat `url` o‘zgarganda qayta ulanish

  // Xabar yuborish funksiyasi
  const sendMessage = (content: string, sender: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const message: Message = {
        id: crypto.randomUUID(),
        content,
        sender,
        timestamp: new Date().toISOString(),
      }
      socketRef.current.send(JSON.stringify(message))
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }))
    } else {
      setState((prev) => ({ ...prev, error: 'WebSocket ulanmagan' }))
    }
  }

  return {
    ...state,
    sendMessage,
  }
}

export default useWebSocket
