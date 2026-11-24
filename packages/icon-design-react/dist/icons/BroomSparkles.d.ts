import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BroomSparklesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BroomSparkles: ForwardRefExoticComponent<BroomSparklesProps & RefAttributes<SVGSVGElement>>;

export default BroomSparkles;
export { BroomSparkles };
