import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaidSearchCoinsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaidSearchCoins: ForwardRefExoticComponent<PaidSearchCoinsProps & RefAttributes<SVGSVGElement>>;

export default PaidSearchCoins;
export { PaidSearchCoins };
