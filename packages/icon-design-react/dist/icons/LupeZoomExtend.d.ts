import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeZoomExtendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeZoomExtend: ForwardRefExoticComponent<LupeZoomExtendProps & RefAttributes<SVGSVGElement>>;

export default LupeZoomExtend;
export { LupeZoomExtend };
