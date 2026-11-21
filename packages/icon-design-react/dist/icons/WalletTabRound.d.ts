import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WalletTabRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WalletTabRound: ForwardRefExoticComponent<WalletTabRoundProps & RefAttributes<SVGSVGElement>>;

export default WalletTabRound;
export { WalletTabRound };
