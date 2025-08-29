import DropsDownlist from "./DropsDownlist";
import Logo from "./Logo";
import SearchBar from "./SearchBar";


const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center py-4 px-8 justify-between sm:flex-row
       gap-4">

        {/* Logo */}
        <Logo />

        {/* Search bar... */}
        <SearchBar />

        {/* Profile */}
        <DropsDownlist />

      </div>
    </nav>
  )
}
export default Navbar;