import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleDashed: ForwardRefExoticComponent<ArrowUpCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleDashed;
export { ArrowUpCircleDashed };
