import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch2ZoomOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch2ZoomOut: ForwardRefExoticComponent<LupeSearch2ZoomOutProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch2ZoomOut;
export { LupeSearch2ZoomOut };
