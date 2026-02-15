import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Minus: ForwardRefExoticComponent<Bookmark3MinusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Minus;
export { Bookmark3Minus };
