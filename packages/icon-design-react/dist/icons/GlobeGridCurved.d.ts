import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridCurved: ForwardRefExoticComponent<GlobeGridCurvedProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridCurved;
export { GlobeGridCurved };
