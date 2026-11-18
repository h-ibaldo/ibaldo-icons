import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftSlim: ForwardRefExoticComponent<ArrowLeftSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftSlim;
export { ArrowLeftSlim };
