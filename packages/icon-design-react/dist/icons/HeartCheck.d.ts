import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartCheck: ForwardRefExoticComponent<HeartCheckProps & RefAttributes<SVGSVGElement>>;

export default HeartCheck;
export { HeartCheck };
