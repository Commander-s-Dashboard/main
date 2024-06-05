'use client'

import React, {useState, useEffect} from 'react';
import PieChart from '@/page/PieChart';
import LineChart from '@/page/LineChart';
import GeoMap from '@/page/GeoMap';
import Footer from '@/page/Footer';
import { getCookies, setCookie, deleteCookie, getCookie } from 'cookies-next';

const G4 = async ({ data }) => {
  const [pieCookie, setPieCookie] = useState(getCookie('pieChart'));
  console.log(pieCookie);

    let dates = []
    data.forEach((e) => {
        const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
        if (!dates.includes(tmpDate)) {
            dates.push(tmpDate)
        }
    });

    dates = dates.map(e => e.split('T')[0])

    const parseData = (data) => {
        let tmp3 = [];
        let dates = []
        data.forEach((e) => {
            const tmpDate = e.date ? e.date.toISOString() : new Date('2023-11-01').toISOString();
            if (!dates.includes(tmpDate)) {
                dates.push(tmpDate)
            }
        });

        for (let i = 0; i < dates.length; i++) {
            const tmpResult = {}
            for (let j = 0 + (i * 150); j < 150 + (i * 150); j++) {
                tmpResult[data[j].operationalstatus] ? tmpResult[data[j].operationalstatus] += 1 : tmpResult[data[j].operationalstatus] = 1;
            }
            tmp3.push(tmpResult);
        }
        for (let i = 0; i < tmp3.length; i++) {
            tmp3[i] = Object.entries(tmp3[i]).map(e => {
                return {
                    name: e[0],
                    value: e[1],
                };
            });
        }
        return tmp3;

    }

    return (
        <div className="h-screen py-4">
            <div className="text-center font-bold text-3xl">Equipment Data</div>
            <div className='grid grid-cols-2 gap-3'>
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input onClick={() => setCookie('pieChart', getCookie('pieChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <PieChart width={400} height={400} data={parseData(data)[3]} />
                    </div>
                </div>
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input onClick={() => setCookie('lineChart', getCookie('lineChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <LineChart data={parseData(data)} dates={dates} />
                    </div>
                </div>
                <div className="card card-side shadow-xl">
                    <div className="card-body flex">
                        <div className="justify-end rating">
                            <input onClick={() => setCookie('mapChart', getCookie('mapChart') !== 'true')} type="checkbox" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                        <GeoMap data={parseData(data)} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default G4;
