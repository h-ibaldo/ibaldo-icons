import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoomActualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoomActual: ForwardRefExoticComponent<LupeZoomActualProps & RefAttributes<SVGSVGElement>>;

export default LupeZoomActual;
export { LupeZoomActual };
