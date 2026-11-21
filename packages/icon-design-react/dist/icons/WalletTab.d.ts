import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WalletTabProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WalletTab: ForwardRefExoticComponent<WalletTabProps & RefAttributes<SVGSVGElement>>;

export default WalletTab;
export { WalletTab };
