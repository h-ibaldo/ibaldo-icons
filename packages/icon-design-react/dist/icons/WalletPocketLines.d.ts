import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WalletPocketLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WalletPocketLines: ForwardRefExoticComponent<WalletPocketLinesProps & RefAttributes<SVGSVGElement>>;

export default WalletPocketLines;
export { WalletPocketLines };
