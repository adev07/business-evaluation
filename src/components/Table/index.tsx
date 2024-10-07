import { FaCircle } from "react-icons/fa";

const DataTable = () => {
    const data = [
        { year: "2019", principal: "658.21", interest: "658.21", balance: "5750.72" },
        { year: "2020", principal: "975.65", interest: "975.65", balance: "3500.72" },
        { year: "2021", principal: "1500.72", interest: "1500.72", balance: "1500.72" },
        { year: "2022", principal: "3500.72", interest: "3500.72", balance: "975.65" },
        { year: "2023", principal: "5750.72", interest: "5750.72", balance: "658.21" },
        { year: "2023", principal: "5750.72", interest: "5750.72", balance: "658.21" },
        { year: "2023", principal: "5750.72", interest: "5750.72", balance: "658.21" },
        { year: "2023", principal: "5750.72", interest: "5750.72", balance: "658.21" },
    ];

    return (
        <div className="mx-auto bg-white rounded-[10px] border p-2">
            <table className="min-w-full text-center table-auto">
                <thead className="text-sm font-medium text-gray-500 bg-gray-100">
                    <tr>
                        <th className="py-2">Year</th>
                        <th className="py-4">
                            <div className="flex items-center justify-center space-x-2">
                                <FaCircle className="text-blue-500" size={10} />
                                <span>Principal</span>
                            </div>
                        </th>
                        <th className="py-4">
                            <div className="flex items-center justify-center space-x-2">
                                <FaCircle className="text-blue-300" size={10} />
                                <span>Interest</span>
                            </div>
                        </th>
                        <th className="py-4">---Balance</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 even:bg-gray-50 hover:bg-gray-100"
                        >
                            <td className="py-3">{item.year}</td>
                            <td className="py-3">{item.principal}</td>
                            <td className="py-3">{item.interest}</td>
                            <td className="py-3">{item.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
