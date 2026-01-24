import { useRef } from 'react'

const EditorArea = ({ onChange }) => {
  const editorRef = useRef(null)

  const handleInput = () => {
    const html = editorRef.current?.innerHTML || ''
    onChange?.(html) // se quiser guardar em estado ou mandar pro backend
  }

  return (
    <div className="bg-primary-50/30 flex flex-col items-center justify-center">
      <div
        ref={editorRef}
        contentEditable
        className="rte-editor-area h-full min-h-dvh w-4/5 border-2 bg-white p-32 focus:outline-none"
        onInput={handleInput}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}

export default EditorArea
