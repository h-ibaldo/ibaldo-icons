import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteArrowDown: ForwardRefExoticComponent<BanknoteArrowDownProps & RefAttributes<SVGSVGElement>>;

export default BanknoteArrowDown;
export { BanknoteArrowDown };
