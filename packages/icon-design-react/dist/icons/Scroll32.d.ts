import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scroll32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scroll32: ForwardRefExoticComponent<Scroll32Props & RefAttributes<SVGSVGElement>>;

export default Scroll32;
export { Scroll32 };
