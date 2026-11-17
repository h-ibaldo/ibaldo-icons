import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinusCircle: ForwardRefExoticComponent<WindowMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowMinusCircle;
export { WindowMinusCircle };
