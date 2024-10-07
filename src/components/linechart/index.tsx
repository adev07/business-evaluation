import { TrendingUp } from "lucide-react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer, YAxis, Legend } from "recharts";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#3a37ff",
    },
};

export function LineChartCard() {
    return (
        <div className="bg-white border rounded-[20px] p-6 mx-auto">
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-[#3B37FF]">Projected Cash Flow</h2>
            </div>

            <div className="mb-6">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="desktop"
                            stroke={chartConfig.desktop.color}
                            strokeWidth={2}
                            dot={{ fill: chartConfig.desktop.color }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="flex flex-col items-start gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-2 font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-gray-500">Showing total visitors for the last 6 months</div>
            </div>
        </div>
    );
}
