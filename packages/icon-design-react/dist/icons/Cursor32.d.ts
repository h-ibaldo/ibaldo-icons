import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor32: ForwardRefExoticComponent<Cursor32Props & RefAttributes<SVGSVGElement>>;

export default Cursor32;
export { Cursor32 };
