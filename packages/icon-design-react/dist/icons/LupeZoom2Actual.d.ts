import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom2ActualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom2Actual: ForwardRefExoticComponent<LupeZoom2ActualProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom2Actual;
export { LupeZoom2Actual };
