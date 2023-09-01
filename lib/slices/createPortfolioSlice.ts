import { StateCreator } from 'zustand';
export interface Portfolio {
    id: string;
    firstname: string,
    lastname: string,
    nickname: string,
    gender: string,
    phone_number: string,
    email: string,
    line_id: string,
    address: string,
    status: string,
}
export interface PortfolioState {
    portfolio: Portfolio[];
    setPortfolio: (portfolio: Portfolio) => void;
}
export const createPortfolioSlice: StateCreator<PortfolioState> = (set) => ({
    portfolio: [],
    setPortfolio: async () => {
        const res = await fetch('http://localhost:3000/api/portfolio')
        set({ portfolio:  await res.json()});
    }
});