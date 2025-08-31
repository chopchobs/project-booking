import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schema";

//https://react-hook-form.com/get-started
const Camping = () => {
    // Register your form inputs , handle form submission
    const { register, handleSubmit,formState } = useForm({
        resolver: zodResolver( campingSchema ),
    });
    // errors = formState.errors, re-structure ออกจาก formState
    const { errors } = formState;
    console.log( errors );
    // share - ตัวแปรอะไรก็ได้ที่ใช้ในการส่งข้อมูล !!!
    // data - ข้อมูลที่ถูกส่งมาจากฟอร์ม !!!
    const share = (data) => {
        //code body
        console.log(data);
    };
  return (
    <section>
        <h1 className="capitalized text-2xl font-semibold mb-4"> 
         Create Camping
        </h1>
        <div className="border p-8 rounded-md">
            <h1 className="text-2xl font-semibold mb-4">Create Input</h1>
            <form onSubmit={ handleSubmit (share) } className="flex flex-col gap-4">
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {/* Title Input */}
                 <FormInputs 
                 register={register} 
                 name='title' 
                 type='text' 
                 placeholder='In Put Your Title' 
                 errors={errors} />
                    {/* Price Input */}
                 <FormInputs 
                 register={register} 
                 name='price' 
                 type='number' 
                 placeholder='In Put Your Price' 
                 errors={errors} />
                    {/* Description Input */}
                 <TextAreaInput 
                 register={register} 
                 name='description'
                 type='text' 
                 placeholder='In Put Your Description' 
                 errors={errors} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
  );
};
export default Camping;