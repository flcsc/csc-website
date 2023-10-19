class DropdownButton extends React.Component
{
    dropped = false;
    constructor(props)
    {
        super(props);
        this.state = {dropped: false};
    }

    buttonClicked(state)
    {
        this.setState({dropped: !state.dropped});
    }

    render()
    {
        if(this.dropped)
        {
            return (
                <div className="dropDown">
                    <h1>Dropped</h1>
                </div>
            );
        }else{
            return null;
        }
    }
};