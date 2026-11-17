import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchZoomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchZoom: ForwardRefExoticComponent<LupeSearchZoomProps & RefAttributes<SVGSVGElement>>;

export default LupeSearchZoom;
export { LupeSearchZoom };
