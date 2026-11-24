import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenSquare: ForwardRefExoticComponent<LinkBrokenSquareProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenSquare;
export { LinkBrokenSquare };
