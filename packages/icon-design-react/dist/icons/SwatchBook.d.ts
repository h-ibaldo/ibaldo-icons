import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwatchBookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwatchBook: ForwardRefExoticComponent<SwatchBookProps & RefAttributes<SVGSVGElement>>;

export default SwatchBook;
export { SwatchBook };
