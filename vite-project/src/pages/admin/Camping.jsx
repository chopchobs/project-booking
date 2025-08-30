import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";

//https://react-hook-form.com/get-started
const Camping = () => {
    const { register, handleSubmit } = useForm({});
    //share - ตัวแปรอะไรก็ได้ที่ใช้ในการส่งข้อมูล !!!
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
                    <FormInputs register={register} name='title'  placeholder='In Put Your Title...' />
                    <FormInputs register={register} name='price' type='number' placeholder='In Put Your Price...' />
                    <TextAreaInput register={register} name='description' type='text' placeholder='In Put Your Description...' />
                </div>
            </form>
            <button type="submit">Submit</button>
        </div>
    </section>
  );
};
export default Camping;