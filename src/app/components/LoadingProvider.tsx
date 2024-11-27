'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LoadingContextType {
    setIsLoading: (loading: boolean) => void
    isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoading() {
    const context = useContext(LoadingContext)
    if (!context) {
        throw new Error('useLoading must be used within LoadingProvider')
    }
    return context
}

export default function LoadingProvider({
    children,
    loader
}: {
    children: React.ReactNode
    loader: React.ReactNode
}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <Navbar />
            {isLoading && loader}
            {children}
            <Footer />
        </LoadingContext.Provider>
    )
}