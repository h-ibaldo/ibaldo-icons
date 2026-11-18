import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunCircleSplitTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunCircleSplitTilted: ForwardRefExoticComponent<SunCircleSplitTiltedProps & RefAttributes<SVGSVGElement>>;

export default SunCircleSplitTilted;
export { SunCircleSplitTilted };
