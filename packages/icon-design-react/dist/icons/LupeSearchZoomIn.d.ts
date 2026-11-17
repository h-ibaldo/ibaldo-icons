import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchZoomInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchZoomIn: ForwardRefExoticComponent<LupeSearchZoomInProps & RefAttributes<SVGSVGElement>>;

export default LupeSearchZoomIn;
export { LupeSearchZoomIn };
