import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor3: ForwardRefExoticComponent<Cursor3Props & RefAttributes<SVGSVGElement>>;

export default Cursor3;
export { Cursor3 };
