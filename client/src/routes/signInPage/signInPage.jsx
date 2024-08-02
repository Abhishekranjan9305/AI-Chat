import { SignIn } from '@clerk/clerk-react'
import './signInPage.css'

const SignInPage = ()=>{
    return (
        <div className='signInPage'>
            <SignIn path="/sign-in" signUpUrl="/sign-up" forcedRedirectUrl="/dashboard" />
        </div>
    )
}

export default SignInPage