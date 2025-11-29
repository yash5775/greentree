export interface SalesData {
    month: string;
    sales: number;
    [key: string]: string | number;
}

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const getSalesData = (year: number): SalesData[] => {
    // Seed-like behavior for consistent "random" data based on year
    const baseValue = year === 2024 ? 5000 : year === 2023 ? 4000 : 3000;

    return months.map((month, index) => {
        // Random variation
        const variation = Math.sin(index + year) * 1000 + (Math.random() * 500);
        const sales = Math.max(1000, Math.round(baseValue + variation));
        return {
            month,
            sales,
        };
    });
};

export const getAllYearsData = () => {
    return {
        2022: getSalesData(2022),
        2023: getSalesData(2023),
        2024: getSalesData(2024),
    };
};
