import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch2Check: ForwardRefExoticComponent<LupeSearch2CheckProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch2Check;
export { LupeSearch2Check };
