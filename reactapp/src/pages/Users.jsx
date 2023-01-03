import React from 'react'
import Card from 'react-bootstrap/Card';

const Users = (props) => {
  return (
    <div className='d-flex all-card'>
      {
         props.userList.map(user=>{
            return(
                    <div className='cards'>
                        <Card key={user.id} className='singlecard' style={{ width: '19rem' ,display:'flex'}}>
                      <Card.Img variant="top" src={user.avatar} />
                        <Card.Body>
                        <Card.Title>
                        <span>{user.id}.</span>                        
                        <span> {user.fname}</span>   
                        <span> {user.lname}</span>                        
                        </Card.Title>
                        <Card.Text>                        
                        {user.username}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                  
            )
         })
    
      }
      </div>
  )
}

export default Users