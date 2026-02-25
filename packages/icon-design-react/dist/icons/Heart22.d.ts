import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart22: ForwardRefExoticComponent<Heart22Props & RefAttributes<SVGSVGElement>>;

export default Heart22;
export { Heart22 };
