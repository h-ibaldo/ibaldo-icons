import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor42: ForwardRefExoticComponent<Cursor42Props & RefAttributes<SVGSVGElement>>;

export default Cursor42;
export { Cursor42 };
