import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default ({ users, onDelete }) => {
  return (
    <ListGroup>
      {users.sort((a, b)=> {
        if (a.firstName > b.firstName){
          return 1;
        } else if (a.firstName < b.firstName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else if (a.lastName < b.lastName) {
          return -1;
        } else return 0;
      }).map((user)=> (
        <ListGroupItem key={user.id}>
          <section className='d-flex'>
            <div style={{ flexGrow: 1}}>
              {user.firstName} {user.lastName}
            </div>
            <div>
              <button onClick={()=>onDelete(user.id)} className='btn btn-danger outline'>Delete</button>
            </div>
          </section>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

