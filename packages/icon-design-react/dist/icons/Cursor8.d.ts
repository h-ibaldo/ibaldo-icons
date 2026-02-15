import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cursor8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cursor8: ForwardRefExoticComponent<Cursor8Props & RefAttributes<SVGSVGElement>>;

export default Cursor8;
export { Cursor8 };
