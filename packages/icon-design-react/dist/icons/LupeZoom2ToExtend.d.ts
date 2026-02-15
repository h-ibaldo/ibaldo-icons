import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom2ToExtendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom2ToExtend: ForwardRefExoticComponent<LupeZoom2ToExtendProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom2ToExtend;
export { LupeZoom2ToExtend };
