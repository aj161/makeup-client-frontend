import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/About.css'

function About(){
  return(
    <>
    <h1>This is About Us Page</h1>
    <Card style={{ width: '500px' }}>
      <Card.Img variant="top" src="https://pyxis.nymag.com/v1/imgs/079/3c3/fb8b8f4cd5650c8430bc60773e6c14c736-12-woman-computer-coder.rsquare.w700.jpg" />
      <Card.Body>
        <Card.Title>Hi! My name is Anastasija</Card.Title>
        <Card.Text>
        Junior developer with keen interest in both front and back-end software development. Passionate about creating user-friendly, functional and aesthetic software solutions to meet and exceed customer expectations.

Currently looking for a career change and is in the process of completing an intensive full-stack developer bootcamp covering HTML, CSS, JavaScript, React, Node JS with focus on MERN stack.

Current role as Senior Project Engineer together with background in chemical engineering and project management allowed to obtain transferrable technical and soft skills. Those include understanding of product development cycles, user requirement definition, problem solving, drive for continuous improvement as well as cross-functional teamwork and management skills as demonstrated by work experience below. 

Eager to learn and work hard to progress in long-term development career and take on new challenges. 


        </Card.Text>
        </Card.Body>
    </Card>
    </>

  )
}

export default About;