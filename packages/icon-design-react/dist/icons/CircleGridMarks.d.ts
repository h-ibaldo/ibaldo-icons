import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleGridMarksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleGridMarks: ForwardRefExoticComponent<CircleGridMarksProps & RefAttributes<SVGSVGElement>>;

export default CircleGridMarks;
export { CircleGridMarks };
