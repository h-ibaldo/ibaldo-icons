import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteSearch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteSearch2: ForwardRefExoticComponent<BanknoteSearch2Props & RefAttributes<SVGSVGElement>>;

export default BanknoteSearch2;
export { BanknoteSearch2 };
