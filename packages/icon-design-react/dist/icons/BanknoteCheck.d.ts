import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteCheck: ForwardRefExoticComponent<BanknoteCheckProps & RefAttributes<SVGSVGElement>>;

export default BanknoteCheck;
export { BanknoteCheck };
