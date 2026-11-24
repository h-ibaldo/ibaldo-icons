import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteArrowUp: ForwardRefExoticComponent<BanknoteArrowUpProps & RefAttributes<SVGSVGElement>>;

export default BanknoteArrowUp;
export { BanknoteArrowUp };
