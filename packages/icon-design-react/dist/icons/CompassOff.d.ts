import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassOff: ForwardRefExoticComponent<CompassOffProps & RefAttributes<SVGSVGElement>>;

export default CompassOff;
export { CompassOff };
