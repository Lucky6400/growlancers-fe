import { GiCrystalGrowth } from "react-icons/gi";
import { NavMenu } from "./NavMenu";
import ProfileInfo from "./ProfileInfo";
const Header = () => {
  return (
    <header className="bg-primary px-5 flex items-center justify-between h-20 border-b border-gray-500">
        <div className="flex items-center text-4xl text-white gap-3 font-serif">
        <GiCrystalGrowth color="#fff" />
        <p>Growlancer</p>
        </div>
        <NavMenu />
        <ProfileInfo/>
    </header>
  )
}

export default Header