import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark32: ForwardRefExoticComponent<Bookmark32Props & RefAttributes<SVGSVGElement>>;

export default Bookmark32;
export { Bookmark32 };
