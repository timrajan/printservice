import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 70px;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-bg-opacity: 1;
  --tw-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
`

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  & img {
    width: 100%;
    object-fit: cover;
  }
`

export const HeaderNav = styled.nav`
  & ul {
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: #1a365d;
    font-weight: 500;
    font-size: 1.4rem;
  }
`
