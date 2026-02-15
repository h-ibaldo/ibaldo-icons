import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart1: ForwardRefExoticComponent<Heart1Props & RefAttributes<SVGSVGElement>>;

export default Heart1;
export { Heart1 };
