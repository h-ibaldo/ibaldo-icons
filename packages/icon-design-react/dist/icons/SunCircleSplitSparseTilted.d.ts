import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunCircleSplitSparseTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunCircleSplitSparseTilted: ForwardRefExoticComponent<SunCircleSplitSparseTiltedProps & RefAttributes<SVGSVGElement>>;

export default SunCircleSplitSparseTilted;
export { SunCircleSplitSparseTilted };
