import {BsBook} from 'react-icons/bs';
import {AiOutlineShop} from 'react-icons/ai';
import {GoSettings} from 'react-icons/go';
import './ActionBar.scss';
import {NavLink,} from "react-router-dom";

export const ActionBar = () => {
  const PROFILE_ICON = 'PROFILE'
  const ICON_SIZE = '1.3em'

  const ActionsWithIcon = (props: any) => {
    const {label, icon, to} = props;

    return (
        <NavLink to={to} className={"action-item-icon"}>
          {
            icon !== PROFILE_ICON ?
                (<span>{icon}</span>) : <img src={"profile.png"} alt={"user profile"}/>
          }
          <span className={'label'}>{label}</span>
        </NavLink>
    )
  }

  return (
      <span className="actions">
        <NavLink to={"/get-discount"}>
          <button className="button danger">Get $20 Off</button>
        </NavLink>
        <ActionsWithIcon to={'/recipes'} label={'Recipes'} icon={<BsBook size={ICON_SIZE}/>}/>
        <ActionsWithIcon to={'/shop'} label={'Shop'} icon={<AiOutlineShop size={ICON_SIZE}/>}/>
        <ActionsWithIcon to={'/profile'} label={'Profile'} icon={PROFILE_ICON}/>
        <ActionsWithIcon to={'/settings'} label={'Settings'} icon={<GoSettings size={ICON_SIZE}/>}/>
      </span>
  )
}