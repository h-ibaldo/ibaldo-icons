import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch3Check: ForwardRefExoticComponent<LupeSearch3CheckProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch3Check;
export { LupeSearch3Check };
