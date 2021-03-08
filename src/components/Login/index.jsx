import React from 'react';
import { Container as ContainerBase } from '../../misc/Layouts';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line

import { login } from '../../shared/http';
import { useRouter } from 'next/router';
import Password from 'antd/lib/input/Password';

const Container = tw(
  ContainerBase
)`w-full min-h-screen bg-primary-900 text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 lg:shadow-xl sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`w-full lg:w-1/2 xl:w-5/12 sm:p-12 flex flex-col items-center`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-0 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 border-0 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default function SignIn({
  headingText = 'Sign In To Basic One',

  submitButtonText = 'Sign In',

  forgotPasswordUrl = '#',
  signupUrl = '#',
}) {
  const router = useRouter();
  const myinput = {
    num: '',
    pass: '',
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    console.log(event.target, 'lml');

    var res = await login(email, pass);
    console.log(res, ' res ');
    if (res.err) {
      console.log(res.err);
    }
    if (res.token) {
      router.push('/subject', '/subject');
    }
  };
  return (
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form onSubmit={handlesubmit}>
                <Input type='email' placeholder='Email' id='email' />
                <Input type='password' placeholder='Password' id='password' />
                <SubmitButton type='submit'>
                  <span className='text'>{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw='mt-6 text-xs text-gray-600 text-center'>
                <a href={forgotPasswordUrl}>Forgot Password ?</a>
              </p>
              <p tw='mt-8 text-sm text-gray-600 text-center'>
                Dont have an account?{' '}
                <a href="/signup">
                  <div>Sign Up</div>
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={'/images/loginBanner.png'} />
        </IllustrationContainer>
      </Content>
    </Container>
  );
}
