import "./backoffice.css";
import Menu from "./Menu";

 const Layout = ({ children }) => (
        <div className="backoffice">
            <Menu />
            <div className="content">
                {children}
            </div>
        </div>
    );

    export default Layout;

}