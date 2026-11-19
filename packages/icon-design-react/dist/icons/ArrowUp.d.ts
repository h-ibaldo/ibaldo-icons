import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUp: ForwardRefExoticComponent<ArrowUpProps & RefAttributes<SVGSVGElement>>;

export default ArrowUp;
export { ArrowUp };
