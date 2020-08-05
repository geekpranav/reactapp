import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth,signInWithGoogle} from '../../firebase/firebase.utils';




class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

       

    }
    handleSubmit = async event => {
        event.preventDefault();
        const{email,password} = this.state;
        try{
            auth.signInWithEmailAndPassword(email,password);
            this.setState= ({email:'',password:''})
            
        }catch(error){
            console.log(error);
        }

       
    
    }
    handleChange = event => {
        const{value,name}= event.target;
        this.setState({[name]:value})
    }




    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign-in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} required label='email'/>
                    
                    <FormInput name='password' type = 'password' value={this.state.password}
                     required
                     handleChange={this.handleChange}
                     label='password'
            
                     
                     />
                    
                     <div className='button'>
                     <CustomButton type='submit' >SignIn</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {''}
                        SignIn with Google{''}
                        </CustomButton>

                     </div>
                   


                </form>

            </div>
        )
    }

}

export default SignIn;