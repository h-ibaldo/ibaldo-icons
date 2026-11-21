import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WalletCashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WalletCash: ForwardRefExoticComponent<WalletCashProps & RefAttributes<SVGSVGElement>>;

export default WalletCash;
export { WalletCash };
