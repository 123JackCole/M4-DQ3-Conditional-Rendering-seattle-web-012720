import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const handleClick = (event) => {
    props.onDisplayDetails(event.target.id)
  }

  return (
    <div className="ui four item menu">
      <a className="item active" id="Profile" onClick={handleClick}>
        <i className="user large icon" id="Profile"/>
      </a>

      <a className="item" id="Photo">
        <i className="photo large icon" id="Photo" onClick={handleClick}/>
      </a>

      <a className="item" id="Cocktail">
        <i className="cocktail large icon" id="Cocktail" onClick={handleClick}/>
      </a>

      <a className="item" id="Pokemon"> 
        <i className=" themeisle large icon" id="Pokemon" onClick={handleClick}/>
      </a>
    </div>
  )

}

export default MenuBar
