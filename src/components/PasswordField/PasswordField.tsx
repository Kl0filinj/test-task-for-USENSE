import React, { useState } from 'react';
import {
  ContentContainer,
  MainContainer,
  PasswordContainer,
  PasswordInput,
  PasswordStrengthSection,
  SectionsList,
} from './PasswordField.styled';

const PasswordField = () => {
  const [password, setPassword] = useState('');

  const checkStrenth = (password: string) => {
    let strength: number = 0;
    if (password === '') {
      return strength;
    }
    if (password.length < 8) {
      strength = 5;
      console.log(strength);
      return strength;
    }
    if (password.match(/[A-Za-z]||[А-Яа-я]/)) {
      strength += 1;
    }
    if (password.match(/([0-9])/)) {
      strength += 1;
    }
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~,+,-])/)) {
      strength += 1;
    }
    return strength;
  };

  return (
    <MainContainer>
      <ContentContainer>
        <h1>Test Your Password</h1>
        <PasswordContainer>
          <PasswordInput
            type="text"
            value={password}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(evt.currentTarget.value)
            }
          />
          <SectionsList>
            <PasswordStrengthSection
              strength={checkStrenth(password)}
            ></PasswordStrengthSection>
            <PasswordStrengthSection
              strength={checkStrenth(password)}
            ></PasswordStrengthSection>
            <PasswordStrengthSection
              strength={checkStrenth(password)}
            ></PasswordStrengthSection>
          </SectionsList>
        </PasswordContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default PasswordField;
