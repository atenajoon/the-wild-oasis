import { HiOutlineUser } from 'react-icons/hi2';
import { LuLogOut } from 'react-icons/lu';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <LuLogOut />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
