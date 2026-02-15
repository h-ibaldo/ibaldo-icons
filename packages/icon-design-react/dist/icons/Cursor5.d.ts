import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor5: ForwardRefExoticComponent<Cursor5Props & RefAttributes<SVGSVGElement>>;

export default Cursor5;
export { Cursor5 };
