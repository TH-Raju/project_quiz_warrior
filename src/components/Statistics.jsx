

import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';



const Statistics = () => {
    const data = [
        {
            name: 'Page A',
            marks: 4000,
            quiz: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            quiz: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            quiz: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 2780,
            quiz: 3908,
            amt: 2000,
        }];
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;