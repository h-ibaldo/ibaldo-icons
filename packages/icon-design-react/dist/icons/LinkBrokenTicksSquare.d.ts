import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenTicksSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenTicksSquare: ForwardRefExoticComponent<LinkBrokenTicksSquareProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenTicksSquare;
export { LinkBrokenTicksSquare };
