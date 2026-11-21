import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WalletCardsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WalletCards: ForwardRefExoticComponent<WalletCardsProps & RefAttributes<SVGSVGElement>>;

export default WalletCards;
export { WalletCards };
