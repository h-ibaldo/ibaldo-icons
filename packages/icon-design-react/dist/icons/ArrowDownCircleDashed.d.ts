import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleDashed: ForwardRefExoticComponent<ArrowDownCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleDashed;
export { ArrowDownCircleDashed };
