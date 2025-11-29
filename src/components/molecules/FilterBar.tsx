import React, { useState, useEffect } from "react";
import { Input } from "../atoms/Input";

interface FilterBarProps {
    threshold: number;
    onThresholdChange: (value: number) => void;
}

export function FilterBar({ threshold, onThresholdChange }: FilterBarProps) {
    const [localValue, setLocalValue] = useState(threshold.toString());

    // Debounce the update to the parent to allow smooth typing
    useEffect(() => {
        const timer = setTimeout(() => {
            const numValue = parseFloat(localValue);
            if (!isNaN(numValue)) {
                onThresholdChange(numValue);
            } else if (localValue === "") {
                onThresholdChange(0);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [localValue, onThresholdChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalValue(e.target.value);
    };

    return (
        <div className="flex items-center gap-4">
            <label htmlFor="threshold" className="text-sm font-medium whitespace-nowrap">
                Sales Threshold:
            </label>
            <Input
                id="threshold"
                type="number"
                value={localValue}
                onChange={handleChange}
                className="w-32"
                min={0}
                placeholder="0"
            />
        </div>
    );
}
