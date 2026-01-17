import { useForm } from '@inertiajs/react'

export default function Register({ errors: serverErrors = {} }) {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: '',
      password: '',
      password_confirmation: '',
    },
  })

  const submit = (e) => {
    e.preventDefault()
    post('/users')
  }

  // Mescla erros do servidor com erros do cliente
  const allErrors = { ...serverErrors, ...errors }

  return (
    <div className="text-primary-950 grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex h-full flex-col justify-between p-8">
        <div className="flex w-full flex-col items-center justify-center gap-24 p-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-light uppercase">
              Junte-se a nós e <br></br> transforme suas ideias em realidade!
            </h1>
            <p className="text-primary-900 text-sm">
              Cadastre-se e comece a escrever com o poder da IA.
            </p>
          </div>
          <form className="font flex w-[450px] flex-col gap-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
              <label className="text-primary-950 text-xs">Email</label>
              <input
                type="email"
                required
                className="focus:outline-none w-full border-b border-primary-100 p-2 text-xs"
                value={data.user.email}
                onChange={(e) => setData('user', { ...data.user, email: e.target.value })}
              />
              {allErrors.email && <div className="mt-1 text-xs text-red-500">{allErrors.email[0]}</div>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary-950 text-xs">Senha</label>
              <input
                type="password"
                required
                value={data.user.password}
                className="focus:outline-none w-full border-b border-primary-100 p-2 text-xs"
                onChange={(e) => setData('user', { ...data.user, password: e.target.value })}
              />
              {allErrors.password && (
                <div className="mt-1 text-xs text-red-500">{allErrors.password[0]}</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary-950 text-xs">Confirmar Senha</label>
              <input
                type="password"
                required
                value={data.user.password_confirmation}
                className="focus:outline-none w-full border-b border-primary-100 p-2 text-xs"
                onChange={(e) =>
                  setData('user', { ...data.user, password_confirmation: e.target.value })
                }
              />
              {allErrors.password_confirmation && (
                <div className="mt-1 text-xs text-red-500">{allErrors.password_confirmation[0]}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="mt-12 rounded-3xl bg-primary-200 p-2 text-sm text-primary-600 transition hover:bg-primary-300"
            >
              {processing ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </div>

        <p className="text-primary-900 text-center text-sm">
          Já tem uma conta?{' '}
          <a href="/users/sign_in" className="text-primary-800 hover:underline">
            Faça login
          </a>
        </p>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-primary-50">
        <img src="/login.png" alt="Register illustration" />
      </div>
    </div>
  )
}
