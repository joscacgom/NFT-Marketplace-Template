import '@/styles/globals.css'

import {Navbar,Footer} from '../components/componentsIndex';

const App = ({ Component, pageProps }) =>(

    <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </div>
);


export default App;
