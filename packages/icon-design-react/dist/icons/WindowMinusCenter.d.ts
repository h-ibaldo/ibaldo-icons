import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinusCenter: ForwardRefExoticComponent<WindowMinusCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowMinusCenter;
export { WindowMinusCenter };
