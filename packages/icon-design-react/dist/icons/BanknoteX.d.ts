import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteX: ForwardRefExoticComponent<BanknoteXProps & RefAttributes<SVGSVGElement>>;

export default BanknoteX;
export { BanknoteX };
