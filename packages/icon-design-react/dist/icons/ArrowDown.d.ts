import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDown: ForwardRefExoticComponent<ArrowDownProps & RefAttributes<SVGSVGElement>>;

export default ArrowDown;
export { ArrowDown };
