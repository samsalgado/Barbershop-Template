import React, {useMemo} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import { Images } from './Images';
import { Counter } from "./Counter";
import "./App.css"
interface Props   {
  text?: string;
}

export const Barbershop: React.FC<Props> = () => {
    const cuts = useMemo(() =>
    [
     {
        id:1,
        image: Images.cut1
     },
     {
        id:2,
        image: Images.cut2
     },
     {
        id:3,
        image: Images.cut3
     },
     {
        id:4,
        image: Images.cut4
     },
     {
        id:5,
        image: Images.cut5
     },
     {
        id:6,
        image: Images.cut6
     },
     {
        id:7,
        image: Images.cut7
     },
     {
        id:8,
        image:Images.cut8
     },
     {
        id:9,
        image:Images.cut9
     },
     {
        id:10,
        image:Images.cut10
     },
     {
        id:11,
        image:Images.cut11
     },
     {
        id:12,
        image:Images.cut12
     },
     {
        id:13,
        image:Images.cut13
     },
     {
        id:14,
        image:Images.cut14
     },
     {
        id:15, 
        image:Images.cut15 
     },
     {
        id:16,
        image:Images.cut16
     },
        {
        id:17,
        image:Images.cut17
     },{
        id:18,
        image:Images.cut18
     },{
        id:19,
        image:Images.cut19
     },{
        id:20,
        image:Images.cut20
     },{
        id:21,
        image:Images.cut21
     },{
        id:22,
        image:Images.cut22
     },{
        id:23,
        image:Images.cut23
     },{
        id:24,
        image:Images.cut24
     },{
        id:25,
        image:Images.cut25
     },{
        id:26,
        image:Images.cut26
     },{
        id:27,
        image:Images.cut27
     },
    ],
    [])
  return(
  <div>
    <h1>Haircut Designs</h1>
    <Grid>
        <Row>
            {cuts.map((val, key) => {
                  return (
                    <div key={key}>
                    <img className='pic1' src={val.image} alt="" />
                    
                    <Counter>
                        {(count, setCount) => (
        <div>
          {count} <button onClick={() => setCount(count +1)}>Like</button>

        </div>
        
      )}
                    </Counter>
                    
                    </div>
                  )
                })}
        </Row>
    </Grid>
  </div>
  );
};

