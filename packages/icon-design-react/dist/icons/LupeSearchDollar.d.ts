import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchDollar: ForwardRefExoticComponent<LupeSearchDollarProps & RefAttributes<SVGSVGElement>>;

export default LupeSearchDollar;
export { LupeSearchDollar };
