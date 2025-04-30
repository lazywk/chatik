export default function Logo() {
  return (
    <div className='flex items-end gap-1'>
      <div className='text-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          x='65'
          y='50'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M18 2v4h4V2Zm-5.688 1L10 6.25l3.25 2.344 2.344-3.281ZM2 8v4h4V8Zm14.781 1.594L13.594 12 16 15.188l3.188-2.407ZM2 13v4h4v-4Zm5 0v4h4v-4Zm-5 5v4h4v-4Zm5 0v4h4v-4Zm5 0v4h4v-4Z' />
        </svg>
      </div>
      <span>Chatik</span>
    </div>
  )
}
