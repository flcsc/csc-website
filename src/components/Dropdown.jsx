import React from "react"

class Dropdown extends React.Component
{
    dropped = false;
    constructor(props)
    {
        super(props);
        this.state = {dropped: false};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked()
    {
        this.setState({dropped: (((this.state.dropped) ? false: true))});
    }

    render()
    {
        if(this.state.dropped)
        {
            return (
                <>
                    <img src="dropdown_button.png" className="dropdown-button" onClick={this.buttonClicked}></img>
                    <div className="dropDown">
                        <a href="/projects">Projects</a>
                        <a href="/schedule">Schedule</a>
                    </div>
                </>
            );
        }else{
            return (
                <>
                    <img src="dropdown_button.png" className="dropdown-button" onClick={this.buttonClicked}></img>
                </>
            )
        }
        
    }
}

export default Dropdown;