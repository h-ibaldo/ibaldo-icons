import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scroll2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scroll2: ForwardRefExoticComponent<Scroll2Props & RefAttributes<SVGSVGElement>>;

export default Scroll2;
export { Scroll2 };
