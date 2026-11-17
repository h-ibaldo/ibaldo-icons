import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearch2MoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearch2More: ForwardRefExoticComponent<LupeSearch2MoreProps & RefAttributes<SVGSVGElement>>;

export default LupeSearch2More;
export { LupeSearch2More };
