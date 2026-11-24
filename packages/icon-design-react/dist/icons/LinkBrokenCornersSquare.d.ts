import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenCornersSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenCornersSquare: ForwardRefExoticComponent<LinkBrokenCornersSquareProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenCornersSquare;
export { LinkBrokenCornersSquare };
