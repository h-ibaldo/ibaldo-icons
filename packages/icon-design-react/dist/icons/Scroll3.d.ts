import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scroll3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scroll3: ForwardRefExoticComponent<Scroll3Props & RefAttributes<SVGSVGElement>>;

export default Scroll3;
export { Scroll3 };
