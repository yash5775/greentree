import React from "react";
import { Button } from "../atoms/Button";
import { BarChart3, LineChart, PieChart } from "lucide-react";

export type ChartType = "bar" | "line" | "pie";

interface ChartTypeSelectorProps {
    currentType: ChartType;
    onTypeChange: (type: ChartType) => void;
}

export function ChartTypeSelector({ currentType, onTypeChange }: ChartTypeSelectorProps) {
    return (
        <div className="flex gap-2">
            <Button
                variant={currentType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("bar")}
                title="Bar Chart"
            >
                <BarChart3 className="w-4 h-4 mr-2" />
                Bar
            </Button>
            <Button
                variant={currentType === "line" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("line")}
                title="Line Chart"
            >
                <LineChart className="w-4 h-4 mr-2" />
                Line
            </Button>
            <Button
                variant={currentType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("pie")}
                title="Pie Chart"
            >
                <PieChart className="w-4 h-4 mr-2" />
                Pie
            </Button>
        </div>
    );
}
