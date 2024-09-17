import styled from 'styled-components'

export const HeroFormulario = styled.form`
  position: relative;
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  &.hero-formulario::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.CorPrincipal};
    content: '';
    opacity: 0.7;
    z-index: 1; /* Certifique-se que o z-index está correto */
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const HetoTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #eee;
  position: relative;
  z-index: 2; /* Garanta que o z-index esteja correto */

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
