import React from 'react';
import SignIn from './Login/SignIn';
import './test.css'
import SignUp from './Registr/SignUp';

const Test = () => {
    return (         
	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
                                <div className="container_title">
                                <h1 className='signup'>SignUp</h1>  <h1>SignIn</h1>
                                </div>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<SignUp />
			      				</div>
								<div className="card-back">
									<SignIn />
			      				</div>
			      			</div>
			      		</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    );
};

export default Test;