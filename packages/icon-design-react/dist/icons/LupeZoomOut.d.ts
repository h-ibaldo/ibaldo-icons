import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoomOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoomOut: ForwardRefExoticComponent<LupeZoomOutProps & RefAttributes<SVGSVGElement>>;

export default LupeZoomOut;
export { LupeZoomOut };
