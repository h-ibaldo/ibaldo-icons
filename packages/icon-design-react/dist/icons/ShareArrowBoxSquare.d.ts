import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShareArrowBoxSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShareArrowBoxSquare: ForwardRefExoticComponent<ShareArrowBoxSquareProps & RefAttributes<SVGSVGElement>>;

export default ShareArrowBoxSquare;
export { ShareArrowBoxSquare };
