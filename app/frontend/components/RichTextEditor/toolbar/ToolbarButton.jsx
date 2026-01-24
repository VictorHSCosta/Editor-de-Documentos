import React from 'react'
import ErrorBoundary from '../../../entrypoints/ReactErrorBoundary'
import { CircleX } from 'lucide-react'

const ToolbarButton = ({ label, icon: Icon, onClick, title }) => {
  return (
    <ErrorBoundary
      fallback={
        <div className="text-red-600" title="Error o componente não pode ser exibido">
          <CircleX />
        </div>
      }
    >
      <button
        id={label}
        type="button"
        className="hover:bg-primary-100 flex items-center justify-center rounded-lg p-1"
        onClick={onClick}
        title={title}
      >
        <Icon size={16} className="text-primary-950" />
      </button>
    </ErrorBoundary>
  )
}

export default ToolbarButton
