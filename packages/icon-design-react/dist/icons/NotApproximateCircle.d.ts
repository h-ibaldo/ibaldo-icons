import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotApproximateCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotApproximateCircle: ForwardRefExoticComponent<NotApproximateCircleProps & RefAttributes<SVGSVGElement>>;

export default NotApproximateCircle;
export { NotApproximateCircle };
