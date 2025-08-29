import NavbarAdmin from "@/components/navbar/NavbarAdmin";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
        <NavbarAdmin/>
        <Outlet />
    </div>
  )
}
export default LayoutAdmin;