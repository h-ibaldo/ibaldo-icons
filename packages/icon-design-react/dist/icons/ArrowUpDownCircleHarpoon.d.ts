import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpDownCircleHarpoonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpDownCircleHarpoon: ForwardRefExoticComponent<ArrowUpDownCircleHarpoonProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpDownCircleHarpoon;
export { ArrowUpDownCircleHarpoon };
