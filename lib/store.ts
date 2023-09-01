import { create } from 'zustand';
import { createPortfolioSlice, PortfolioState } from './slices/createPortfolioSlice';
type StoreState = PortfolioState;
export const useStore = create<StoreState>()((...a) => ({ ...createPortfolioSlice(...a) }));