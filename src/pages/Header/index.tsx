
import MenuClose from "@assets/header-icons/fa-mobile-close.svg";
import MenuOpen from "@assets/header-icons/fa-mobile-open.svg";

import { useRef, useState } from "react";

function CreateLink({ text, ...props }) {
  return (
    <button className="menu-button">
      <span>{props.iconLeft}{text}</span>
      {props.iconRight}
    </button>
  );
}

function index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef: any = useRef(null);

  const data = {
    menu: [
      {
        text: 'Experts',
        submenu: [
          {
            text: 'Directors',
          },
          {
            text: 'Administration',
          },
          {
            text: 'Editor / Researcher',
          }
        ]
      },
      {
        text: 'Events',
        submenu: [
          {
            text: 'Conference / Saminar'
          },
          {
            text: 'IHD'
          },
          {
            text: 'VISITS'
          },
          {
            text: 'GSTAR',
            submenu: [
              {
                text: '2021',
              },
              {
                text: '2022',
              }
            ]
          }

        ]
      },
      {
        text: 'Publications',
      },
      {
        text: 'Journal',
      },
      {
        text: 'Media',
      }
      ,
      {
        text: 'About',
      },
      {
        text: 'Contact',
      }
    ]
  }

  function showMenu(menu: any[], id = 'nav__anchor', count = 0) {
    const className = count === 0 ? 'menu-list ' : 'menu-sub-list'
    return (
      <ul className={className}>
        {menu.map((e, j) => {
          const uid = `${id}${j + 1}`;
          return (
            <li className="menu-item" >
              <CreateLink text={e.text} iconRight={e?.submenu ? <i className="arrow-bottom" /> : null} />
              {e.submenu && <>{showMenu(e.submenu, uid, -1)}</>}
            </li>
          )
        })}
      </ul>
    )
  }
  function handleMenuToggle(isMenuOpened) {
    if (isMenuOpened) {
      navRef.current.style.display = "none"
      setIsMobileMenuOpen(false)
    } else {
      navRef.current.style.display = "block"
      setIsMobileMenuOpen(true)
    }
  }

  return (
    <header className="header-sec">
      <img className="logo" src="https://www.kyndryl.com/content/experience-fragments/kyndrylprogram/us/en/sites/header/master/_jcr_content/root/header_copy/image.coreimg.svg/1636019574172/kyndryl-logo.svg" alt="Kyndryl logo" />
      <nav className="navbar" ref={navRef}>
        {data.menu.map((e, i) => (
          <div className="nav__item" tabIndex={i}>
            <CreateLink text={e.text}
              {...(e.submenu ? { iconRight: <i className="arrow-bottom" /> } : {})} />
            {e?.submenu && <>{showMenu(e.submenu)}</>}
          </div>
        ))}
      </nav>
      <div className="menu_mobile" onClick={() => handleMenuToggle(isMobileMenuOpen)}>
        {!isMobileMenuOpen && <MenuOpen />}
        {isMobileMenuOpen && <MenuClose />}
      </div>
    </header >

  )
}

export default index









// function Reusable1(props) {
//   return (
//     <div className="nav__item" tabIndex={props.i}>
//       {CreateLink()}
//       <>{props.e.submenu && showMenu(props.e.submenu)}</>
//     </div>
//   );
// }





// function showNestedMenu(id) {
//   const elem: any = document.querySelector(`.header-sec #${id} ~ li`)
//   const currWrapperElem: any = document.querySelector(`.header-sec #${id} ~ li.wrapper-nested-menu`)
//   const currWrapperElemClass = currWrapperElem?.classList ? Array.from(currWrapperElem.classList) : []



//   if (currWrapperElem) {
//     const wrapperElemsAdjacentDiv: any = document.querySelectorAll(`.header-sec div.wrapper-li`);
//     console.log({ wrapperElemsAdjacentDiv, isNestedMenuOpen })

//     if (!!wrapperElemsAdjacentDiv.length) {
//       wrapperElemsAdjacentDiv.forEach(element => {
//         const key = element.id;
//         console.log({ key })
//         setIsNestedMenuOpen(prevState => ({ ...prevState, [key]: false }));
//       });
//     }
//     hideAlreadyOpenedMenu(currWrapperElemClass);
//   }

//   if (elem) {
//     const display = elem.style.display
//     const classNames = elem.classList ? Array.from(elem.classList) : []

//     console.log({ display, classNames })

//     if (classNames.indexOf("visuallyhidden") !== -1) {
//       // elem.style.display = "block";

//       setIsNestedMenuOpen(prevState => ({ ...prevState, [id]: true }));
//     } else {
//       setIsNestedMenuOpen(prevState => ({ ...prevState, [id]: false }));
//       // elem.classList.add("visuallyhidden")
//       // elem.style.display = "none";
//     }
//     elem.classList.toggle("visuallyhidden")

//   }

//   function hideAlreadyOpenedMenu(currWrapperElemClass) {
//     const wrapperElems: any = document.querySelectorAll(`.header-sec li.wrapper-nested-menu`);

//     if (!!wrapperElems.length) {
//       wrapperElems.forEach(element => {
//         const classNames = element.classList ? Array.from(element.classList) : [];
//         if (classNames.indexOf("visuallyhidden") === -1) {
//           element.classList.add("visuallyhidden");
//         }
//       });
//     }
//     if (currWrapperElemClass.indexOf("visuallyhidden") === -1) {
//       currWrapperElem.classList.remove("visuallyhidden")
//     }
//   }
// }

// const WrapperDiv = ({ count, children, className, ...prop }) => {
//   if (count === 0) {
//     return <ul {...prop} className={className} >{children}</ul>
//   }
//   return <ul {...prop} className={className}>{children}</ul>
// }



{/* <div id={uid} className="group" onClick={() => showNestedMenu(uid)}>
{e.text && <a >{e.text}</a>}
{e.submenu && (
<>
  {isNestedMenuOpen[uid] && <AnchorUp />}
  {!isNestedMenuOpen[uid] && <AnchorDown />}
</>
)}
</div> */}
{/* {e.submenu && (count > -1 && (count = count + 1))} */ }


// function showNestedMenu(id) {
//   console.log(id)
// }




