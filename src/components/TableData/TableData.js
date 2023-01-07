import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './tabledata.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const TableData = () => {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://devcore02.cimet.io/v1/generate-token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',
    //         },
    //         body: JSON.stringify({
    //             // any additional request data that you need to include goes here
    //         }),
    //     })
    //         .then(response => response.json())
    //         .then(data => {


    //             fetch('https://devcore02.cimet.io/v1/plan-list', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',
    //                     'Auth-Token': data.access_token,
    //                 },
    //                 body: JSON.stringify({
    //                     session_id: 'eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9',
    //                 }),
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log(data);
    //                 });


    //         });
    // }, [])
    // useEffect(() => {
    //     fetch('https://devcore02.cimet.io/v1/generate-token', {
    //         method: 'POST',
    //         headers: {
    //             'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             fetch('https://devcore02.cimet.io/v1/plan-list', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',
    //                     'Auth-Token': data.access_token,
    //                 },
    //                 body: JSON.stringify({
    //                     session_id: 'eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9',
    //                 }),
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log(data);
    //                 });
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })

    // }, [])

    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/api").then((res)=>{
        
            console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
    })


    console.log("hello")
    return (
        <div className='container'>
            <div className='btn-area'>
                <button className='btn'>
                    Electricity <span>8</span>
                </button>
                <div className='filter-area'>
                    <span className='location'><LocationOnIcon />2000, NSW</span>
                    <button className='btn'>
                        Filter
                    </button>
                </div>
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum at animi tenetur quaerat? Est, vel nisi reiciendis itaque eaque maxime non nobis tempore, architecto at optio odio asperiores? Quam, ipsam qui. Aut ex vero </p>
            </div>
            <div className='table-data'>
                <div className='category'>

                    <span className='location bill-category'>
                        <ElectricBoltIcon />Electricity</span>
                    <span className='location bill-category'><SolarPowerIcon />Solar</span>
                </div>
                <div className='details'>
                    <div className='box1'>
                        <img src="https://cdn.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg" alt="" />
                        <a href=''>View Details</a>
                        <p>Basic plan Information Document</p>
                    </div>
                    <div className='box2'>
                        <div>
                            <div className='updating-price'>
                                <p>29% less than</p>
                                <p>the current reference price</p>
                            </div>
                            <div className='options'>
                                <p><CheckCircleOutlineIcon /> 12 month Energy Plan Period</p>
                                <p><CheckCircleOutlineIcon /> Ongoing Market Contract</p>
                                <p><CheckCircleOutlineIcon /> No Exit Fees</p>
                                <p><CheckCircleOutlineIcon /> Once off $50 sign up credit (incl.GST</p>
                            </div>
                            <div>
                                <p className='standard'>Standard Feed in Tarrif: Sc</p>
                            </div>



                        </div>
                    </div>
                    <div className='box3'>
                        <h3 className='cost'>Estimated Cost</h3>
                        <h2 className='year-cost'>$987^<span style={{ color: "gray", fontSize: "15px" }}>/yr</span></h2>
                        <h3 className='month-cost'>$84<span style={{ color: "gray", fontSize: "15px" }}>/mo</span></h3>
                    </div>
                </div>
                <div className='advantage'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime reprehenderit libero consequuntur harum quo similique dolorem debitis itaque! Praesentium deleniti quibusdam blanditiis vitae consequatur sit. Maxime ipsa iure odit excepturi odio quos harum et omnis at porro numquam minima ea ipsum quisquam aperiam sed tempore adipisci, dignissimos fugit eligendi!</p>
                </div>
                <div>
                    <div className='connect-data'>
                        <p><CheckCircleOutlineIcon /> 10 business days cooling off period</p>
                        <p><CheckCircleOutlineIcon />Secure signup in 5 mins</p>
                        <p><CheckCircleOutlineIcon />Save time and effort</p>
                        <div>
                            <button className='connect-btn'>Connect Online Today</button>
                        </div>

                    </div>
                    <div className='advantage'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel omnis nam eum exercitationem provident ullam ipsam at consectetur delectus rerum necessitatibus quas iusto vitae veniam aperiam alias voluptatem laudantium, velit adipisci iste cupiditate. Et nulla quisquam aliquid! Nostrum, itaque amet!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableData;


