import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareXDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareXDouble: ForwardRefExoticComponent<ScreenShareXDoubleProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareXDouble;
export { ScreenShareXDouble };
