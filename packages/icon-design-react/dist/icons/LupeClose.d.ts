import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeClose: ForwardRefExoticComponent<LupeCloseProps & RefAttributes<SVGSVGElement>>;

export default LupeClose;
export { LupeClose };
