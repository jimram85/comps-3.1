import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
    };
    return <div>
        <div>
            <Button success rounded outline className="mb-5">
            <GoBell />  
            Click ME!
            </Button>
        </div>
        <div>
            <Button danger outline>
            <GoCloudDownload />
                Buy Now</Button>
        </div>
        <div>
            <Button warning >
            <GoDatabase />
                See deals</Button>
        </div>
        <div>
            <Button secondary outline>Checkout</Button>
        </div>
        <div>
            <Button primary rounded>Primary</Button>
        </div>
       
    </div>;
}

export default ButtonPage;