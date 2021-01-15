import React, {Component} from 'react'
import './DisplayProfile.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class DisplayProfile extends Component {  
    render () {
      if (this.props.active) {
        return (
          <Card            
            className = "mx-auto"
            style = {{ width: '18rem' }}
          >            
            <Card.Img 
                variant = "top"
                src = {this.props.user.avatar_url}
            />
            <ListGroup>               
                    <ListGroup.Item>Name: <a href='https://github.com/dpurcell1'>{this.props.user.name}</a></ListGroup.Item>
                    <ListGroup.Item>Followers: {this.props.user.followers}</ListGroup.Item>
                    <ListGroup.Item>Location: {this.props.user.location}</ListGroup.Item>                
            </ListGroup>            
          </Card>
        )
      } else {
        return null;
      }    
    }  
  }

  export default DisplayProfile;