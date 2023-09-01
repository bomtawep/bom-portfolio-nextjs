import { Portfolio } from '../../lib/slices/createPortfolioSlice';
import { useStore } from '../../lib/store';
export const PortfolioComponent = (portfolio: Portfolio) => {
    return (
        <div>
            <h1>Portfolio</h1>
            <p>Firstname: {portfolio.firstname}</p>
            <p>Lastname: {portfolio.lastname}</p>
            <p>Nickname: {portfolio.nickname}</p>
        </div>
    );
}