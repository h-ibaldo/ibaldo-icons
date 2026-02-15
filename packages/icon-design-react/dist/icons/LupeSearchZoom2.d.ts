import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchZoom2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchZoom2: ForwardRefExoticComponent<LupeSearchZoom2Props & RefAttributes<SVGSVGElement>>;

export default LupeSearchZoom2;
export { LupeSearchZoom2 };
