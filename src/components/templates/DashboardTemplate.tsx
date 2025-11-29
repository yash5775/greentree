import React from "react";
import { DashboardHeader } from "../organisms/DashboardHeader";

interface DashboardTemplateProps {
    children: React.ReactNode;
}

export function DashboardTemplate({ children }: DashboardTemplateProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <DashboardHeader />
            <main className="container mx-auto py-6 px-4 md:px-6">
                <div className="grid gap-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
