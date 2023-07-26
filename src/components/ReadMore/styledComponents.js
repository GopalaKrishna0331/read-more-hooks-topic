import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 38px;
  color: #1e293b;
`
export const Paragraph = styled.p`
  font-family: 'roboto';
  width: 80%;
  text-align: ${props => (props.selected ? 'center' : 'left')};
  color: #334155;
`
export const Image = styled.img`
  width: 80%;
`
export const Button = styled.button`
  padding: 12px 26px;
  background-color: #1f81ff;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
`
