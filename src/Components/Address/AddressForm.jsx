import { useState } from 'react';
import './Address.css'

const AddressForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <div className=' mb-5 addreddBG p-3'>
            <form>
                <div className='row g-3 mb-3'>
                    <div className='col'>
                        <label htmlFor="division" className="form-label">Division:*</label>
                        <input type="text" className="form-control" id="division" aria-describedby="division" />
                    </div>
                    <div className='col'>
                        <label htmlFor="district" className="form-label">District:*</label>
                        <input type="text" className="form-control" id="district" aria-describedby="district" />
                    </div>
                </div>
                <div className='row g-3 mb-3'>
                    <div className='col'>
                        <label htmlFor="thana" className="form-label">SubDistrict/Thana:*</label>
                        <input type="text" className="form-control" id="thana" aria-describedby="thana" />
                    </div>
                    <div className='col'>
                        <label htmlFor="union" className="form-label">City Corporation / Union / Municipality:*</label>
                        <input type="text" className="form-control" id="union" aria-describedby="union" />
                    </div>
                </div>

                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>

        </div>
    );
};

export default AddressForm;