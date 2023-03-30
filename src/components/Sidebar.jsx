import Avatar from '../img/foto.jpg';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Leandro Reis"/>
        <p className="title">Assistente de Programação</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">
            Download Curriculo
        </a>
    </aside>
  )
}

export default Sidebar