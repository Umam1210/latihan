import React from 'react'
import Card from 'react-bootstrap/Card';
import data from "../data/data.json"
import {useState} from "react"

function Detail() {
const [Data, setData] = useState(data)
  return (
    <div>
        <Card style={{ width: '20rem', height: "150px" }} className="bg-dark my-2 ">
                
                        <div className="d-flex">
                            <div className="p-2 flex-fill">
                                <Card.Img variant="top" src={data.image} style={{ borderRadius: "100%", width: "100px", height: "100px" }} className="my-3 mx-3" />
                            </div>
                            <div className="p-2 flex-fill my-3">
                                <Card.Text>
                                    {data.username}
                                </Card.Text>
                                <div>followers {data.follower}</div>
                            </div>
                        </div>
            
                    </Card>
    </div>
  )
}

export default Detail