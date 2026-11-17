import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupePin4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupePin4: ForwardRefExoticComponent<LupePin4Props & RefAttributes<SVGSVGElement>>;

export default LupePin4;
export { LupePin4 };
