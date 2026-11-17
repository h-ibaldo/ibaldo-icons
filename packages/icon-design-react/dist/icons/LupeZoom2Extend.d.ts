import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom2ExtendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom2Extend: ForwardRefExoticComponent<LupeZoom2ExtendProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom2Extend;
export { LupeZoom2Extend };
