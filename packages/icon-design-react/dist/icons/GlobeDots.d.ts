import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeDots: ForwardRefExoticComponent<GlobeDotsProps & RefAttributes<SVGSVGElement>>;

export default GlobeDots;
export { GlobeDots };
