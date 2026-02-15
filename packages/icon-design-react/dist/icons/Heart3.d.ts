import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart3: ForwardRefExoticComponent<Heart3Props & RefAttributes<SVGSVGElement>>;

export default Heart3;
export { Heart3 };
