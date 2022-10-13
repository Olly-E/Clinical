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
    align-items: center;
    position: absolute;
    width: 100vw;
    padding: 1.5rem 13rem;
    justify-content: space-between;
    box-sizing: border-box;

    div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-weight: 600;
  }
`;
const LogoName = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.5rem;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    p{
        font-weight: 600;
        text-decoration: underline;
        padding-left :1rem;
        margin-left: 1rem;
        border-left: 1px solid black;
    }
`;