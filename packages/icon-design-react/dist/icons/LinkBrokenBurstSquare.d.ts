import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstSquare: ForwardRefExoticComponent<LinkBrokenBurstSquareProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstSquare;
export { LinkBrokenBurstSquare };
