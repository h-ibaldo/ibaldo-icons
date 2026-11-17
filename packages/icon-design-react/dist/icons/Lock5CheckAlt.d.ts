import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Lock5CheckAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Lock5CheckAlt: ForwardRefExoticComponent<Lock5CheckAltProps & RefAttributes<SVGSVGElement>>;

export default Lock5CheckAlt;
export { Lock5CheckAlt };
