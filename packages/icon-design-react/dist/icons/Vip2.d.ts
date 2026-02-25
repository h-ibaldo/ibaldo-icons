import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Vip2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Vip2: ForwardRefExoticComponent<Vip2Props & RefAttributes<SVGSVGElement>>;

export default Vip2;
export { Vip2 };
