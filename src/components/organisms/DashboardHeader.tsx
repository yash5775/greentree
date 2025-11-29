import React from "react";

export function DashboardHeader() {
    return (
        <header className="border-b bg-white dark:bg-gray-900">
            <div className="flex h-16 items-center px-4 md:px-6">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Sales Dashboard
                </h1>
                <div className="ml-auto flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Welcome, User
                    </span>
                </div>
            </div>
        </header>
    );
}
