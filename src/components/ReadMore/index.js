import {useState} from 'react'

import {Container, Heading, Paragraph, Image, Button} from './styledComponents'

const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props
  const text = reactHooksDescription.slice(0, 170)
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Paragraph selected>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph>{readMore ? reactHooksDescription : text}</Paragraph>
      <Button onClick={() => setReadMore(prevState => !prevState)}>
        {readMore ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore
