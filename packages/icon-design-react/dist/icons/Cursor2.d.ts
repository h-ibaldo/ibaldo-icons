import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor2: ForwardRefExoticComponent<Cursor2Props & RefAttributes<SVGSVGElement>>;

export default Cursor2;
export { Cursor2 };
