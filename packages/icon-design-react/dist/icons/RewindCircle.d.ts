import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RewindCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RewindCircle: ForwardRefExoticComponent<RewindCircleProps & RefAttributes<SVGSVGElement>>;

export default RewindCircle;
export { RewindCircle };
