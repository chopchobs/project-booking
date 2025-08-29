import DropsDownlist from "./DropsDownlist";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const NavbarAdmin = () => {
  return (
    <nav>
      <div className="flex flex-col items-center py-4 px-8 justify-between sm:flex-row
       gap-4">
        
        {/* Logo */}
        <h1><Logo/></h1>

        {/* Search bar... */}
        <h1><SearchBar /></h1>

        {/* Profile */}
        <DropsDownlist /> 
      </div>
    </nav>
  )
}
export default NavbarAdmin;