import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import data from "../data/data.json"

function List() {
    return (
        <div className="d-flex justify-content-center text-light" >
            <div >
                {data.map((item, id) => {
                    return (<Card style={{ width: '20rem', height: "150px" }} className="bg-dark my-2 ">
                        <Link to="/detail" className="text-light text-decoration-none">
                        <div className="d-flex">
                            <div className="p-2 flex-fill">
                                <Card.Img variant="top" src={item.image} style={{ borderRadius: "100%", width: "100px", height: "100px" }} className="my-3 mx-3 text-light" />
                            </div>
                            <div className="p-2 flex-fill my-4">
                                <Card.Text>
                                   @ {item.username}
                                </Card.Text>
                                <div>followers {item.follower}</div>
                            </div>
                        </div>
                        </Link>
                    </Card>
                    )})}
            </div>
        </div>
    )
}

export default List