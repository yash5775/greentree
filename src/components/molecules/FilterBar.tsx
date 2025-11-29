import React, { useState, useEffect } from "react";
import { Input } from "../atoms/Input";

interface FilterBarProps {
    threshold: number;
    onThresholdChange: (value: number) => void;
}

export function FilterBar({ threshold, onThresholdChange }: FilterBarProps) {
    const [inputValue, setInputValue] = useState(threshold.toString());

    useEffect(() => {
        setInputValue(threshold.toString());
    }, [threshold]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        const numValue = Number(value);
        if (!isNaN(numValue)) {
            onThresholdChange(numValue);
        }
    };

    return (
        <div className="flex items-center gap-4">
            <label htmlFor="threshold" className="text-sm font-medium whitespace-nowrap">
                Sales Threshold:
            </label>
            <Input
                id="threshold"
                type="number"
                value={inputValue}
                onChange={handleChange}
                className="w-32"
                min={0}
            />
        </div>
    );
}
