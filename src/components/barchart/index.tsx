import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, Legend, YAxis } from "recharts";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

export const description = "A stacked bar chart with a legend";

export function BarChartComponent() {
    return (
        <div className="bg-white border rounded-[20px] p-6 mx-auto">
            <div className="mb-4">
                <h2 className="text-sm text-[#3B37FF] font-semibold">Debt Payment Schedule</h2>
            </div>
            <div className="mb-6">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="desktop" stackId="a" fill="#2463eb" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="mobile" stackId="a" fill="#60a8fa" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-700">
                <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="text-gray-500">January - June 2024</div>
                </div>
            </div>
        </div>
    );
}
