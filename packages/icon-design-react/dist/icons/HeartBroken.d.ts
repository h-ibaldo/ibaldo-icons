import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartBroken: ForwardRefExoticComponent<HeartBrokenProps & RefAttributes<SVGSVGElement>>;

export default HeartBroken;
export { HeartBroken };
