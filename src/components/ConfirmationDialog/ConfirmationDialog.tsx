import { DialogWithOverlay } from "./DialogWithOverlay"
import { doesFnHaveArgs } from "../../hooks/doesFnHaveArgs"

export const ConfirmationDialog = ({
  action,
  boolState,
  setBoolFalse,
  message,
}: {
  action: (e?: React.ChangeEvent<HTMLInputElement>) => void
  boolState: boolean
  setBoolFalse: React.Dispatch<React.SetStateAction<boolean>>
  message?: string
}) => {
  return (
    <DialogWithOverlay open={boolState} onClose={setBoolFalse}>
      <div className={`flex w-full flex-col gap-4 font-sans text-neutral-900`}>
        <h1 className="text-center text-3xl">Are you sure?</h1>
        <p className="text-lg font-bold">
          {message ?? "This action cannot be undone."}
        </p>
        <div className="mt-4 flex items-end justify-end gap-4">
          <label htmlFor="no">No</label>
          <input
            className="p-1 text-right text-red-600 transition duration-500 ease-in-out hover:text-red-600/70"
            onChange={
              doesFnHaveArgs(action.length)
                ? (e) => {
                    action(e)
                    setBoolFalse(false)
                  }
                : () => {
                    action()
                    setBoolFalse(false)
                  }
            }
            type="radio"
            name="no"
            value="no"
          />
          <label htmlFor="yes">Yes</label>
          <input
            onChange={
              doesFnHaveArgs(action.length)
                ? (e) => {
                    action(e)
                    setBoolFalse(false)
                  }
                : () => {
                    action()
                    setBoolFalse(false)
                  }
            }
            type="radio"
            name="yes"
            value="yes"
          />
        </div>
      </div>
    </DialogWithOverlay>
  )
}
