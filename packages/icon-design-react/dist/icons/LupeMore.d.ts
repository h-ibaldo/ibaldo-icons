import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeMoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeMore: ForwardRefExoticComponent<LupeMoreProps & RefAttributes<SVGSVGElement>>;

export default LupeMore;
export { LupeMore };
