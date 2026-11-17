import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeCheck: ForwardRefExoticComponent<LupeCheckProps & RefAttributes<SVGSVGElement>>;

export default LupeCheck;
export { LupeCheck };
