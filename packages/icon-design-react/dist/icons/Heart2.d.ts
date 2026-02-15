import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart2: ForwardRefExoticComponent<Heart2Props & RefAttributes<SVGSVGElement>>;

export default Heart2;
export { Heart2 };
