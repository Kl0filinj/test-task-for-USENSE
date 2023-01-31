const { default: styled } = require('@emotion/styled');

interface IStrengthPresets {
  [index: number]: string;
}

interface INthOptions {
  [index: string]: string;
}

const strengthPresets: IStrengthPresets = {
  0: 'none',
  5: 'tooShort',
  1: 'easy',
  2: 'medium',
  3: 'hard',
};

const nthOptions: INthOptions = {
  tooShort: '-n+3',
  easy: '-n+1',
  medium: '-n+2',
  hard: '-n+3',
};

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fontsize: 40px;
  color: #010101;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  font-size: 28px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 90%;
`;

export const SectionsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PasswordStrengthSection = styled.div`
  flex-basis: 33%;
  height: 8px;
  margin: 10px 3px;
  background-color: gray;
  transition: background-color 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:nth-of-type(${({ strength }: {strength: number}) => nthOptions[strengthPresets[strength]]}) {
    background-color: ${({ strength }: {strength: number}) => {
      switch (strengthPresets[strength]) {
        case 'tooShort':
          return 'red';
        case 'easy':
          return 'red';
        case 'medium':
          return 'yellow';
        case 'hard':
          return 'green';
        default:
          break;
      }
    }};
`;
