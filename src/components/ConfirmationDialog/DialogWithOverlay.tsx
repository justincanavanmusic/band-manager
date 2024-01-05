import { Dialog } from "@headlessui/react"
import { type ComponentPropsWithRef } from "react"

interface DialogOverlayProps extends ComponentPropsWithRef<"div"> {
  open: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogWithOverlay = ({
  open,
  onClose,
  children,
  ...props
}: DialogOverlayProps) => {
  return (
    <Dialog as="div" open={open} onClose={onClose} {...props}>
      <div className="fixed inset-0 z-[4] bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 z-[5] flex items-center justify-center rounded-lg p-4">
        <Dialog.Panel
          className={`relative max-h-[80vh] rounded-lg border-2 border-black bg-white p-8 `}
        >
          <button onClick={()=>onClose(false)} className="absolute right-4 top-4 h-6 w-6">
            X
          </button>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
