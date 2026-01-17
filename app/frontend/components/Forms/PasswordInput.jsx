import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

const PasswordInput = ({ data, setData, name = 'password' }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={data.user[name]}
        className="border-primary-100 w-full border-b p-2 text-xs focus:outline-none"
        onChange={(e) => setData('user', { ...data.user, [name]: e.target.value })}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-2 right-3"
      >
        {showPassword ? (
          <Eye size={16} className="text-primary-900" />
        ) : (
          <EyeClosed size={16} className="text-primary-900" />
        )}
      </button>
    </div>
  )
}

export default PasswordInput
