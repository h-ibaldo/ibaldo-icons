import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart32: ForwardRefExoticComponent<Heart32Props & RefAttributes<SVGSVGElement>>;

export default Heart32;
export { Heart32 };
