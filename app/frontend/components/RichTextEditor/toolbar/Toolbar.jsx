import React from 'react'
import ToolbarButton from './ToolbarButton'
import { inicialToolbarConfig } from './toolbarConfig'

const Toolbar = () => {
  return (
    <div className="bg-primary-50 flex flex-row justify-center p-2">
      {inicialToolbarConfig.map((buttonConfig, index) => (
        <ToolbarButton key={index} {...buttonConfig} />
      ))}
    </div>
  )
}

export default Toolbar
