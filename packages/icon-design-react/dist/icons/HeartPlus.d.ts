import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartPlus: ForwardRefExoticComponent<HeartPlusProps & RefAttributes<SVGSVGElement>>;

export default HeartPlus;
export { HeartPlus };
