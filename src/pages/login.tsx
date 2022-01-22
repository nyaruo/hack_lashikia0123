import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {TextInput} from '../components/index'
import { auth } from '../utils/firebase'

const Login: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])

  const logIn = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      router.push('/')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="m-0 m-auto max-w-md p-4">
      <h2 className="bg-white pt-6 pb-4 font-bold rounded text-xl">ログイン</h2>
      <div className="h-8" />
      <form className="auth" onSubmit={logIn}>
        <div>
          <label htmlFor="email" className="block text-grey-darker pt-2 text-sm font-bold mb-2">
            Email:{' '}
          </label>
          <TextInput
            id={"email"} className="auth-input" type={"email"} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-grey-darker pt-2 text-sm font-bold mb-2">
            Password:{' '}
          </label>
          <TextInput
            id={"password"}
            className="auth-input"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="h-8" />
        </div>
        <div className="m-0 m-auto text-center">
          <button className="auth-btn" type="submit">
            ログイン
          </button>
        </div>
      </form>
      <Link href="/signup">
        <a className="h-5 hover:bg-gray-700 text-base auth-link">アカウント登録はこちらから</a>
      </Link>
    </div>
  )
}

export default Login