import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeTilted: ForwardRefExoticComponent<GlobeTiltedProps & RefAttributes<SVGSVGElement>>;

export default GlobeTilted;
export { GlobeTilted };
