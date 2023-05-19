import LinkIcon from "../LinkIcon/LinkIcon";
import { FC, useState } from "react";
import type { LinkType } from "../../types/Link";


interface MenuProps {
  pages: LinkType[];
}

const Menu: FC<MenuProps> = ({pages}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      console.log(isOpen)
      setIsOpen(!isOpen);
    }

    return (
      <nav className="">
        <LinkIcon onClick={toggleMenu} title={isOpen ? "Fermer le menu" : "Ouvrir le menu"} isIconOnly={true}>{isOpen ? "⨯" : "≡"}</LinkIcon>
        {isOpen && 
          <div className={`fixed left-0 top-[3.25rem] flex-col w-[100vw] bg-slate-700 ${isOpen ? "flex" : "hidden"}`}>
            <ul className="container mx-auto">
              {pages.map((page, key) => (
                <li key={key} className="px-4 py-2">
                  <LinkIcon href={page.href} title={page.title}>{page.icon}</LinkIcon>
                </li>
              ))}
            </ul>
          </div>
        }
      </nav>
    )
}

export default Menu;