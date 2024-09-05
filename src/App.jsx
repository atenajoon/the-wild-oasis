import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const StyledApp = styled.main`
  background-color: red;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Input></Input>
        <h1>Hi</h1>
        <Button>Check in</Button>
      </StyledApp>
    </>
  );
}

export default App;
