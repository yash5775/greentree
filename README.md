# Sales Dashboard

This project is a Sales Dashboard application built with Next.js 15, TypeScript, and Tailwind CSS. It demonstrates Atomic Design principles and includes interactive charts using Recharts.

## Features

- **Atomic Design Structure**: Components are organized into Atoms, Molecules, Organisms, and Templates.
- **Interactive Charts**: Visualizes sales data for 2022, 2023, and 2024 using Bar, Line, and Pie charts.
- **Data Filtering**: Users can filter sales data based on a threshold value.
- **Chart Switching**: Toggle between different chart types dynamically.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **Mock Data**: Realistic random data generation for demonstration.

## Project Structure

```
src/
├── components/
│   ├── atoms/       # Basic UI elements (Button, Input, Card)
│   ├── molecules/   # Simple combinations (FilterBar, ChartTypeSelector)
│   ├── organisms/   # Complex widgets (SalesChartWidget, DashboardHeader)
│   └── templates/   # Page layouts (DashboardTemplate)
├── lib/             # Utilities and Mock Data
└── app/             # Next.js App Router pages
```

## Setup Instructions

1.  **Clone the repository** (if applicable) or navigate to the project directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  **Open the application**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- **Next.js 15**: React framework for production.
- **TypeScript**: Static type checking.
- **Tailwind CSS**: Utility-first CSS framework.
- **Recharts**: Composable charting library for React.
- **Lucide React**: Icon library.
- **clsx & tailwind-merge**: Utility for constructing `className` strings conditionally.
