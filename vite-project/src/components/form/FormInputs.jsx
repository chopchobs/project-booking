import { Input } from "../ui/input"
import { Label } from "../ui/label"

const FormInputs = ({register,name,type,placeholder}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className='capitalize mb-2'>{name}</Label>
      <Input {...register(name)} type={type} placeholder={placeholder} />
    </div>
  )
}
export default FormInputs;