import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCheckCircle: ForwardRefExoticComponent<WindowCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowCheckCircle;
export { WindowCheckCircle };
