import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchZoom3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchZoom3: ForwardRefExoticComponent<LupeSearchZoom3Props & RefAttributes<SVGSVGElement>>;

export default LupeSearchZoom3;
export { LupeSearchZoom3 };
