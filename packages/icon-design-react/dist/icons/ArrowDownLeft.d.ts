import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownLeft: ForwardRefExoticComponent<ArrowDownLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownLeft;
export { ArrowDownLeft };
