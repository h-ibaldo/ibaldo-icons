import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch3MoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch3More: ForwardRefExoticComponent<LupeSearch3MoreProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch3More;
export { LupeSearch3More };
