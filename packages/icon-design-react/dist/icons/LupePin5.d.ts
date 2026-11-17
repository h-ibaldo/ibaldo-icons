import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupePin5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupePin5: ForwardRefExoticComponent<LupePin5Props & RefAttributes<SVGSVGElement>>;

export default LupePin5;
export { LupePin5 };
