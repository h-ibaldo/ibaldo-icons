import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2TwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Two: ForwardRefExoticComponent<Bookmark2TwoProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Two;
export { Bookmark2Two };
