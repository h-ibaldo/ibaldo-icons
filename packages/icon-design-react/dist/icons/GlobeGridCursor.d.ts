import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridCursor: ForwardRefExoticComponent<GlobeGridCursorProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridCursor;
export { GlobeGridCursor };
