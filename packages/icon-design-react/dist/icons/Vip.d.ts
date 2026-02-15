import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Vip: ForwardRefExoticComponent<VipProps & RefAttributes<SVGSVGElement>>;

export default Vip;
export { Vip };
