import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotEqualCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotEqualCircle: ForwardRefExoticComponent<NotEqualCircleProps & RefAttributes<SVGSVGElement>>;

export default NotEqualCircle;
export { NotEqualCircle };
