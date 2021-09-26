import './Header.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {ActionBar} from './ActionBar';
import {NavLink,} from "react-router-dom";

export const Header = () => {

  function InputSearch(props: any) {
    const {placeholder} = props;
    return (
        <span className="search-input">
          <input placeholder={placeholder}/>
          <AiOutlineSearch className={'search-icon'}/>
        </span>);
  }

  return (
      <div className="box">
        <span className={'left-content'}>
          <span className="brand">
            <NavLink to={"/home"}>
              <img src="logo.png" alt="logo"/>
            </NavLink>
            </span>
          <InputSearch placeholder={'Search Jupiter'}/>
        </span>
        <ActionBar/>
      </div>
  )
}