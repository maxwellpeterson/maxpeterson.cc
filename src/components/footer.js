import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Background from "styles/components/background"

const FooterBackground = styled(Background)`
  background-color: black;
`

const FooterContent = styled.footer`
  max-width: 1250px;
  width: 100%;
  padding: 50px 25px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 35px;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`

const Footnote = styled.p`
  color: white;
`

const LogoContainer = styled.nav`
  display: flex;
  justify-content: center;
`

const MediaLogo = styled(FontAwesomeIcon)`
  margin: 0 8px;
  color: white;
  font-size: 1.25em;
  transition: color 0.2s;
  &:hover {
    color: ${(props) => props.color};
  }
`

const Footer = ({ text, media }) => {
  return (
    <FooterBackground>
      <FooterContent>
        <Footnote>{text}</Footnote>
        <LogoContainer>
          {media.map((item) => (
            <a
              key={item.title}
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <MediaLogo
                title={item.title}
                icon={[item.icon.type, item.icon.name]}
                color={item.color}
              />
            </a>
          ))}
        </LogoContainer>
      </FooterContent>
    </FooterBackground>
  )
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  media: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      icon: PropTypes.exact({
        type: PropTypes.oneOf(["fas", "fab"]).isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
      color: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Footer
