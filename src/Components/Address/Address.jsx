import AddressForm from './AddressForm';
import AddressMap from './AddressMap';
import './Address.css';

const Address = () => {
    return (
        <div>
            <h4 className='addressHeadingbg text-white py-2'> <span className='ms-4'>Address</span></h4>

            <div className='col-12 d-flex justify-content-between'>
                <div className='col-6'>
                    <AddressForm />
                </div>
                <div className='col-6'>
                    <AddressMap />
                </div>
            </div>
        </div>
    );
};

export default Address;