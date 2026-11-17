import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsFourCircleImprovementProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsFourCircleImprovement: ForwardRefExoticComponent<ArrowsFourCircleImprovementProps & RefAttributes<SVGSVGElement>>;

export default ArrowsFourCircleImprovement;
export { ArrowsFourCircleImprovement };
