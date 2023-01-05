import React, {FC} from 'react';
import Header from "./Header";
import Footer from "./Footer";

type LayoutType = {
    children: React.ReactNode
}

const Layout: FC<LayoutType> = ({children}) => {
    return (
        <div className='content'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;