import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom3ExtendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom3Extend: ForwardRefExoticComponent<LupeZoom3ExtendProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom3Extend;
export { LupeZoom3Extend };
