import { createContext } from "react"
import { GigForm } from "../../../types/GigTypes"

type CreateGigContextType = {
  gigForm: GigForm
  setGigForm: React.Dispatch<React.SetStateAction<GigForm>>
  handleChange: (e: any) => void
    
}

export const CreateGigContext = createContext<CreateGigContextType>(
  {} as CreateGigContextType
)