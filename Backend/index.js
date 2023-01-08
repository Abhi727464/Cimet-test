
const express = require("express")
const axios = require('axios');
var cors = require("cors");

const app = express()
app.use(
    cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']})
  );

const PORT = 4000;

app.get("/", (req, res) => {
    res.json({data: "hello from root"})
})

app.get("/api", (req, res) => {
    // res.send("hello from root")
    var config1 = {
        method: 'post',
        url: 'https://devcore02.cimet.io/v1/generate-token',
        headers: {
            'Api-Key': '4NKQ3-815C2-8T5Q2-16318-55301',

        }
    };

    const finalData = axios(config1)
        .then(function (response) {
            const token = response.data.data.token;
            // console.log()
            if (token) {

                console.log("hii", token)

                var data = JSON.stringify({
                    "session_id": "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
                });

                var config = {
                    method: 'post',
                    url: 'https://devcore02.cimet.io/v1/plan-list',
                    headers: {
                        'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
                        'Auth-token': response.data.data.token,

                        'Content-Type': 'application/json',
                        'Cookie': `laravel_session=${response.data.data.token}`
                    },
                    data: data
                };

                const list = axios(config)
                    .then(function (response2) {
                        // console.log(JSON.stringify(response2.data.data.electricity));
                        // res.json(JSON.stringify(response2.data.data.electricity));
                        res.json({data: response2.data.data.electricity});
                        
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
                   
            }
            

        })
        .catch(function (error) {
            console.log(error);

        });


})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})