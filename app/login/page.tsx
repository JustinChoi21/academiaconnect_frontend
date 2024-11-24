'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        console.log('Logged in user:', data.user);
        router.push('/home');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(
        errorMessage === 'Invalid login credentials'
          ? '이메일 또는 비밀번호가 올바르지 않습니다.'
          : '로그인 중 오류가 발생했습니다.'
      );
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginContent>
          <h1>Find Your Perfect Match</h1>
          <p>Discover new research areas, connect with collaborators</p>
          
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <InputGroup>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <PasswordHeader>
                <label htmlFor="password">Password*</label>
                <Link 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    alert('This is a mock website. Password recovery is not implemented.');
                  }}
                >
                  Forgot your password?
                </Link>
              </PasswordHeader>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>

            <LoginButton type="submit">Log in</LoginButton>
          </form>

          <SignUpText>
            Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
          </SignUpText>
        </LoginContent>
      </LoginBox>
      
      <IllustrationBox>
        <Image 
          src="/implement/login/Login_image.png"
          alt="Academia Connect Illustration"
          width={600}
          height={600}
          priority
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </IllustrationBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
`;

const LoginBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LoginContent = styled.div`
  width: 100%;
  max-width: 400px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #000;
    }
  }
`;

const PasswordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    color: #000;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const SignUpText = styled.p`
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const IllustrationBox = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  background-color: #ffe6e6;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`; 