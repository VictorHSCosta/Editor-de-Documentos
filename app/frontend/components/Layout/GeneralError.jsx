const GeneralError = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-center align-middle">
      <img src="./erroLogo.png" alt="" className="h-96 align-middle" />
      <span className="text-primary-900 text-3xl uppercase">
        Ocorreu um erro. Por favor, tente novamente mais tarde.
      </span>
      <span className="text-primary-900 mt-2 text-xl">
        Nossa equipe já está trabalhando para resolver o problema.
      </span>
    </div>
  )
}

export default GeneralError
