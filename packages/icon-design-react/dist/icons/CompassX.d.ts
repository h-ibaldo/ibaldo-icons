import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassX: ForwardRefExoticComponent<CompassXProps & RefAttributes<SVGSVGElement>>;

export default CompassX;
export { CompassX };
