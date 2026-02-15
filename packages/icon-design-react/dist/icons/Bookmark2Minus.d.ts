import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Minus: ForwardRefExoticComponent<Bookmark2MinusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Minus;
export { Bookmark2Minus };
