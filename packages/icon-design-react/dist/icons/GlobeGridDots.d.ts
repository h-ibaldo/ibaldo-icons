import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridDots: ForwardRefExoticComponent<GlobeGridDotsProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridDots;
export { GlobeGridDots };
