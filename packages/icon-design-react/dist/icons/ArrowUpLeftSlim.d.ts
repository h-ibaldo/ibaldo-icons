import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftSlim: ForwardRefExoticComponent<ArrowUpLeftSlimProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftSlim;
export { ArrowUpLeftSlim };
