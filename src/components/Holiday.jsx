import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/holiday.css"

const Holiday = () => {

    const [eaw, setEaw] = useState({});
    const [sco, setSco] = useState({});
    const [ni, setNi] = useState({});

    const [dates, setDate] = useState({
        year: "",
        month: "",
        day: ""
    })

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12.
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = year + "-" + month + "-" + day;

    // useEffect(() => {
    //     setEaw({});
    // }, [eaw,sco,ni])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDate({ ...dates, [name]: value });
        // console.log(date);
    }

    const handleClick = () => {
        var final = `${dates.year}-${dates.month}-${dates.day}`;
        // console.log(final);
        axios.get("https://www.gov.uk/bank-holidays.json").then((res) => {
            // console.log(res.data);
            var data = res.data;
            // console.log(data["england-and-wales"].events);
            var flag = false;
            for (let j = 0; j < data["england-and-wales"].events.length; j++) {
                if ((data["england-and-wales"].events[j]).date === final) {
                    setEaw(data["england-and-wales"].events[j]);
                    flag = true;
                }
            }
            if (flag === false) {
                setEaw({});
            }

            var flag1 = false;
            for (let j = 0; j < data["scotland"].events.length; j++) {
                if ((data["scotland"].events[j]).date === final) {
                    setSco(data["scotland"].events[j]);
                    flag1 = true;
                }
            }
            if (flag1 === false) {
                setSco({});
            }

            var flag2 = false;
            for (let j = 0; j < data["northern-ireland"].events.length; j++) {
                if ((data["northern-ireland"].events[j]).date === final) {
                    setNi(data["northern-ireland"].events[j]);
                    flag2 = true;
                }
            }
            if (flag2 === false) {
                setNi({});
            }
        })
    }

    const handleYesterday = () => {
        axios.get("https://www.gov.uk/bank-holidays.json").then((res) => {
            var data = res.data;
            var flag = false;
            for (let j = 0; j < data["england-and-wales"].events.length; j++) {
                if ((data["england-and-wales"].events[j]).date === newdate) {
                    setEaw(data["england-and-wales"].events[j]);
                    flag = true;
                }
            }
            if (flag === false) {
                setEaw({});
            }

            var flag1 = false;
            for (let j = 0; j < data["scotland"].events.length; j++) {
                if ((data["scotland"].events[j]).date === newdate) {
                    setSco(data["scotland"].events[j]);
                    flag1 = true;
                }
            }
            if (flag1 === false) {
                setSco({});
            }

            var flag2 = false;
            for (let j = 0; j < data["northern-ireland"].events.length; j++) {
                if ((data["northern-ireland"].events[j]).date === newdate) {
                    setNi(data["northern-ireland"].events[j]);
                    flag2 = true;
                }
            }
            if (flag2 === false) {
                setNi({});
            }
        })
    }

    return (
        <div>
            <span>
                <select onChange={(e) => { handleChange(e) }} name="year" value={dates.year}>
                    <option value="0000">YEAR</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </span>
            <span>
                <select onChange={(e) => { handleChange(e) }} name="month" value={dates.month}>
                    <option value="00">MONTH</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </span>
            <span>
                <select onChange={(e) => { handleChange(e) }} name="day" value={dates.day}>
                    <option value="00">DAY</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
            </span>
            <button onClick={handleClick}>Search</button><br />
            <button onClick={handleYesterday}>Yesterday</button><br /><br />
            <div className='table1'>
                <b style={{ width: "25%" }}>Division</b>
                <b style={{ width: "25%" }}>Title</b>
                <b style={{ width: "25%" }}>Date</b>
                <b style={{ width: "25%" }}>Notes</b>
            </div><br />

            {eaw.date ?
                <div className='table'>
                    <div style={{ width: "25%" }}>england-and-wales</div>
                    <div style={{ width: "25%" }}>{eaw.title}</div>
                    <div style={{ width: "25%" }}>{eaw.date}</div>
                    <div style={{ width: "25%" }}>{eaw.notes}</div>
                </div> :
                <div>No holiday in england-and-wales</div>
            }<br />

            {sco.date ?
                <div className='table'>
                    <div style={{ width: "25%" }}>scotland</div>
                    <div style={{ width: "25%" }}>{sco.title}</div>
                    <div style={{ width: "25%" }}>{sco.date}</div>
                    <div style={{ width: "25%" }}>{sco.notes}</div>
                </div> :
                <div>No holiday in scotland</div>
            }<br />

            {ni.date ?
                <div className='table'>
                    <div style={{ width: "25%" }}>northern-ireland</div>
                    <div style={{ width: "25%" }}>{ni.title}</div>
                    <div style={{ width: "25%" }}>{ni.date}</div>
                    <div style={{ width: "25%" }}>{ni.notes}</div>
                </div> :
                <div>No holiday in northern-ireland</div>
            }<br />
        </div>
    )
}

export default Holiday