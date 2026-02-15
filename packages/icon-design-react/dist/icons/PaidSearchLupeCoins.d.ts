import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaidSearchLupeCoinsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaidSearchLupeCoins: ForwardRefExoticComponent<PaidSearchLupeCoinsProps & RefAttributes<SVGSVGElement>>;

export default PaidSearchLupeCoins;
export { PaidSearchLupeCoins };
