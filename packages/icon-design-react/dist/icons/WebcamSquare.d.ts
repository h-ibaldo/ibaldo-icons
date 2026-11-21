import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamSquare: ForwardRefExoticComponent<WebcamSquareProps & RefAttributes<SVGSVGElement>>;

export default WebcamSquare;
export { WebcamSquare };
