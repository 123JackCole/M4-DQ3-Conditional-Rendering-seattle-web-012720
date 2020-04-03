import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      displayPage: ''
    }
  }

  displayDetails = (id) => { 
    this.setState({
      displayPage: this.chooseState(id)
    })
  }

  chooseState = (id) => {
    switch(id) {
      case "Pokemon":
        return <Pokemon />
      case "Photo":
        return <Photos />
      case "Cocktail":
        return <Cocktails />
      case "Profile":
        return <Profile />
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.displayPage}</div>

    return (
      <div>
        <MenuBar onDisplayDetails={this.displayDetails}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
