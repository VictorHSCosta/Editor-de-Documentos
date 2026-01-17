import { useForm } from '@inertiajs/react'
import PasswordInput from '../../components/Forms/PasswordInput'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      remember_me: false,
    },
  })

  const submit = (e) => {
    e.preventDefault()
    post('/users/sign_in')
  }

  return (
    <div className="text-primary-950 grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex h-full flex-col justify-between p-8">
        <div className="flex w-full flex-col items-center justify-center gap-24 p-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-light uppercase">
              Comece a escrever <br></br> sua próxima grande história!
            </h1>
            <p className="text-primary-900 text-sm">
              Faça login e desbloqueie o poder da escrita com IA.
            </p>
          </div>
          <form className="font flex w-[450px] flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
              <label className="text-primary-950 text-xs">Email</label>
              <input
                type="email"
                requered
                className="border-primary-100 w-full border-b p-2 text-xs focus:outline-none"
                value={data.user.email}
                onChange={(e) => setData('user', { ...data.user, email: e.target.value })}
              />
              {errors.email && <div className="mt-1 text-xs text-red-500">{errors.email}</div>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary-950 text-xs">Senha</label>
              <PasswordInput data={data} setData={setData} />
              {errors.password && (
                <div className="mt-1 text-xs text-red-500">{errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="bg-primary-200 text-primary-600 hover:bg-primary-300 mt-12 rounded-3xl p-2 text-sm transition"
            >
              Entrar
            </button>
          </form>
        </div>

        <p className="text-primary-900 text-center text-sm">
          Não tem uma conta?{' '}
          <a href="/users/sign_up" className="text-primary-800 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
      <div className="bg-primary-50 flex h-full w-full items-center justify-center">
        <img src="/login.png" alt="Login illustration" />
      </div>
    </div>
  )
}
