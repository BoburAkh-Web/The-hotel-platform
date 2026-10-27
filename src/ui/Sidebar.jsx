import styled from "styled-components";

const StyledSidebar = styled.header`
  background-color: #e1ec06;
  padding: 2.8rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
