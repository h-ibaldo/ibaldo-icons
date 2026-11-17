import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupePin3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupePin3: ForwardRefExoticComponent<LupePin3Props & RefAttributes<SVGSVGElement>>;

export default LupePin3;
export { LupePin3 };
