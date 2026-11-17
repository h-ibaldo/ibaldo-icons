import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareSquare: ForwardRefExoticComponent<ShareSquareProps & RefAttributes<SVGSVGElement>>;

export default ShareSquare;
export { ShareSquare };
