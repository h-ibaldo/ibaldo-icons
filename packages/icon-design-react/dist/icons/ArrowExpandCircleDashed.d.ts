import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowExpandCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowExpandCircleDashed: ForwardRefExoticComponent<ArrowExpandCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default ArrowExpandCircleDashed;
export { ArrowExpandCircleDashed };
