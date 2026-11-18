import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightSlim: ForwardRefExoticComponent<ArrowDownRightSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightSlim;
export { ArrowDownRightSlim };
