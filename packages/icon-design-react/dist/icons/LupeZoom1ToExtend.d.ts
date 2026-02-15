import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoom1ToExtendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoom1ToExtend: ForwardRefExoticComponent<LupeZoom1ToExtendProps & RefAttributes<SVGSVGElement>>;

export default LupeZoom1ToExtend;
export { LupeZoom1ToExtend };
