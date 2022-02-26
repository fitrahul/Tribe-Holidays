import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Holiday = () => {
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
    //     console.log(newdate);
    // }, [])

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

            for (let j = 0; j < data["england-and-wales"].events.length; j++) {
                if ((data["england-and-wales"].events[j]).date === final) console.log((data["england-and-wales"].events[j]));
            }
            for (let j = 0; j < data["scotland"].events.length; j++) {
                if ((data["scotland"].events[j]).date === final) console.log((data["scotland"].events[j]));
            }
            for (let j = 0; j < data["northern-ireland"].events.length; j++) {
                if ((data["northern-ireland"].events[j]).date === final) console.log((data["northern-ireland"].events[j]));
            }

        })
    }

    const handleYesterday = () => {
        axios.get("https://www.gov.uk/bank-holidays.json").then((res) => {
            var data = res.data;
            for (let j = 0; j < data["england-and-wales"].events.length; j++) {
                if ((data["england-and-wales"].events[j]).date === newdate) console.log((data["england-and-wales"].events[j]));
            }
            for (let j = 0; j < data["scotland"].events.length; j++) {
                if ((data["scotland"].events[j]).date === newdate) console.log((data["scotland"].events[j]));
            }
            for (let j = 0; j < data["northern-ireland"].events.length; j++) {
                if ((data["northern-ireland"].events[j]).date === newdate) console.log((data["northern-ireland"].events[j]));
            }
        })
    }

    return (
        <div>
            <span>
                <select onChange={(e) => { handleChange(e) }} name="year" value={dates.year}>
                    <option value="0000">0000</option>
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
                    <option value="00">00</option>
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
                    <option value="00">00</option>
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
            <button onClick={handleYesterday}>Yesterday</button>
        </div>
    )
}

export default Holiday