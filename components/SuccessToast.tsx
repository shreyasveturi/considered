import React from 'react'

export default function SuccessToast({message}:{message:string}){
  return (
    <div className="success-toast toast-enter">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17l-5-5" stroke="#2F2924" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="text-sm">{message}</div>
    </div>
  )
}
