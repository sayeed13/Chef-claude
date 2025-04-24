import Logo from "../images/chef-claude-icon.png"

export default function header() {
    return (
        <header>
            <img src={Logo} alt="chef-claude-logo"/>
            <p>Chef Claude</p>
        </header>
    )
}