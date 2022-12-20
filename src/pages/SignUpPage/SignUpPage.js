import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import { useState } from 'react';

import Logo from '../../assets/logo.png'
import { SignUpPageStyles, Login, Form } from './style'

export default function SignUpPage() {

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      email: '',
      name: '',
      image: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    function SignUpAPI(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', { ...signUpData });
      promise.then(() => {
        setIsLoading(false);
        navigate('/');
      });
      promise.catch((err) => {
        setIsLoading(false);
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      })
    }

    function OnChange(e) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value});
    }

    return (
      <SignUpPageStyles>
        <img src={Logo} />

        <Form onSubmit={SignUpAPI}>
          <input 
            type='email' placeholder='email'
            value={signUpData.email} name='email'
            onChange={OnChange} required
            data-test='email-input'
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='senha'
            value={signUpData.password} name='password'
            onChange={OnChange} required
            data-test='password-input'
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='nome'
            value={signUpData.name} name='name'
            onChange={OnChange} required
            data-test='user-name-input'
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='foto'
            value={signUpData.image} name='image'
            onChange={OnChange} required
            data-test='user-image-input'
            disabled={isLoading}
          />
          <button type='submit' disabled={isLoading} data-test='signup-btn'>
            {isLoading ? 
              <ThreeDots 
              height="80" 
              width="80" 
              radius="9"
              color="white" 
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            /> : 'Cadastrar'}
          </button>
        </Form>

        <Link to={isLoading ? '' : '/'} data-test='login-link'>
          <Login>
            Já tem uma conta? Faça Login!
          </Login>
        </Link>
      </SignUpPageStyles>
    );
  }

  {/* <ThreeDots 
  height="80" 
  width="80" 
  radius="9"
  color="white" 
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/> */}