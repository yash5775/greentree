"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/Card";
import { ChartTypeSelector, ChartType } from "../molecules/ChartTypeSelector";
import { FilterBar } from "../molecules/FilterBar";
import { SalesData, fetchSalesData } from "@/lib/mockData";
import { Loader2 } from "lucide-react";

interface SalesChartWidgetProps {
    year: number;
    initialData?: SalesData[]; // Optional initial data
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

export function SalesChartWidget({ year, initialData }: SalesChartWidgetProps) {
    const [data, setData] = useState<SalesData[]>(initialData || []);
    const [loading, setLoading] = useState(!initialData);
    const [chartType, setChartType] = useState<ChartType>("bar");
    const [threshold, setThreshold] = useState<number>(0);

    useEffect(() => {
        if (!initialData) {
            setLoading(true);
            fetchSalesData(year)
                .then((fetchedData) => {
                    setData(fetchedData);
                })
                .finally(() => setLoading(false));
        }
    }, [year, initialData]);

    const filteredData = useMemo(() => {
        return data.filter((item) => item.sales >= threshold);
    }, [data, threshold]);

    const renderChart = () => {
        if (loading) {
            return (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                </div>
            );
        }

        if (filteredData.length === 0) {
            return (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    No data meets the threshold criteria.
                </div>
            );
        }

        switch (chartType) {
            case "line":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={filteredData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                                name={`Sales ${year}`}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                );
            case "pie":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={filteredData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) =>
                                    `${name} ${((percent || 0) * 100).toFixed(0)}%`
                                }
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="sales"
                                nameKey="month"
                            >
                                {filteredData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                );
            case "bar":
            default:
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={filteredData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#8884d8" name={`Sales ${year}`} />
                        </BarChart>
                    </ResponsiveContainer>
                );
        }
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Sales Overview {year}</CardTitle>
                <ChartTypeSelector currentType={chartType} onTypeChange={setChartType} />
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <FilterBar threshold={threshold} onThresholdChange={setThreshold} />
                </div>
                <div className="mt-4">{renderChart()}</div>
            </CardContent>
        </Card>
    );
}
