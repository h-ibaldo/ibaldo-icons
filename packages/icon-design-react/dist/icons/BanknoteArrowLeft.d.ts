import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteArrowLeft: ForwardRefExoticComponent<BanknoteArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default BanknoteArrowLeft;
export { BanknoteArrowLeft };
