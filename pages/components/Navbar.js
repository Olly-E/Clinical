import styled from "styled-components";
import {FiSearch}  from 'react-icons/fi'
export default function Navbar() {
  return (
    <Nav>
        <div>
            <p>Home</p>
            <p>Galley</p>
            <p>Services</p>
            <p>AboutUs</p>
        </div>
        <LogoName>
            <h1>Milo</h1>
            <h1>Cuts</h1>
        </LogoName>
        <Search>
            <FiSearch />
            <p>Book Now</p>
        </Search>
    </Nav>
  );
}

const Nav = styled.div`
    display: flex;
`;
const LogoName = styled.div`
    display: flex;
`;
const Search = styled.div`
    display: flex;
`;