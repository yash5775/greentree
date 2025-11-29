import React from "react";
import { Input } from "../atoms/Input";

interface FilterBarProps {
    threshold: number;
    onThresholdChange: (value: number) => void;
}

export function FilterBar({ threshold, onThresholdChange }: FilterBarProps) {
    return (
        <div className="flex items-center gap-4">
            <label htmlFor="threshold" className="text-sm font-medium whitespace-nowrap">
                Sales Threshold:
            </label>
            <Input
                id="threshold"
                type="number"
                value={threshold}
                onChange={(e) => onThresholdChange(Number(e.target.value))}
                className="w-32"
                min={0}
            />
        </div>
    );
}
