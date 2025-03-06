'use client'

import { FORM_FIELD } from './contants'
import Input from '@/component/ui/input'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

const HomeEmail = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userInfo: ''
  })

  const handlePostEmail = async () => {
    try {
      const templateParams = {
        from_name: formData.userName,
        from_email: formData.userEmail,
        message: formData.userInfo
      }
      console.log(templateParams)
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      if (response.status === 200) {
        alert('이메일이 성공적으로 전송되었습니다.')
      }
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      alert('이메일 전송에 실패했습니다.')
    }
  }

  const handleInputChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.value
      }))
    }

  return (
    <section>
      <ul className='flex flex-col gap-y-2 bg-gray-50 p-4 py-6 rounded-md'>
        {FORM_FIELD.map((field) => (
          <li key={field.name}>
            <Input
              label={field.label}
              type={field.type}
              id={field.name}
              placeholder={`${field.label}을 입력해주세요.`}
              onChange={handleInputChange(field.name)}
              required
            />
          </li>
        ))}
      </ul>
      <button
        onClick={handlePostEmail}
        type='submit'
        className='w-full bg-gray-200 py-2 mt-4 rounded-md hover:bg-gray-400'
      >
        보내기
      </button>
    </section>
  )
}

export default HomeEmail
