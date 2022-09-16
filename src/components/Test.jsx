import React from 'react';
import SignIn from './Login/SignIn';
import './test.css'
import SignUp from './Registr/SignUp';

const Test = () => {
    return (
        <div>
            
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
                                <div className="container_title">
                                <h1 className='signup'>SignUp</h1>  <h1>SignIn</h1>
                                </div>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<SignUp />
			      				</div>
								<div class="card-back">
									<SignIn />
			      				</div>
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