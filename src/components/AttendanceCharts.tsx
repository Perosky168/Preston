"use client"
import Image from "next/image"

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 20,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 10,
    absent: 14,
  },
  {
    name: 'Wed',
    present: 13,
    absent: 22,
  },
  {
    name: 'Thur',
    present: 10,
    absent: 12,
  },
  {
    name: 'Fri',
    present: 30,
    absent: 34,
  },
];

const AttendanceCharts = () => {
  return (
    <div className='bg-white rounded-xl h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[100%]">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
            <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
            <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
            <Legend 
              align="left" 
              verticalAlign="top" 
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} 
            />
            <Bar dataKey="present" fill="#8884d8" legendType="circle" radius={[10, 10, 0, 0]} />
            <Bar dataKey="absent" fill="#82ca9d" legendType="circle"  radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AttendanceCharts