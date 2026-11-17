import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom3ActualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom3Actual: ForwardRefExoticComponent<LupeZoom3ActualProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom3Actual;
export { LupeZoom3Actual };
