import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea";

const TextAreaInput = ({register,name,placeholder}) => {
  return (
    <div className="mb-3">
      <Label htmlFor={name} className='capitalize mb-2'>{name}</Label>
      <Textarea {...register(name)}
       rows={4}
       placeholder={placeholder} className="border p-2 w-full" />
    </div>
  )
}
export default TextAreaInput;