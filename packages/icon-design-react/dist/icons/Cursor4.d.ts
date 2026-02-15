import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor4: ForwardRefExoticComponent<Cursor4Props & RefAttributes<SVGSVGElement>>;

export default Cursor4;
export { Cursor4 };
