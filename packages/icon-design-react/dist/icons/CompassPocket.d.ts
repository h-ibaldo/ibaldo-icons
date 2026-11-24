import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassPocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassPocket: ForwardRefExoticComponent<CompassPocketProps & RefAttributes<SVGSVGElement>>;

export default CompassPocket;
export { CompassPocket };
