import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupePin2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupePin2: ForwardRefExoticComponent<LupePin2Props & RefAttributes<SVGSVGElement>>;

export default LupePin2;
export { LupePin2 };
