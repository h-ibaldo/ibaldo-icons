import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamOffSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamOffSquare: ForwardRefExoticComponent<WebcamOffSquareProps & RefAttributes<SVGSVGElement>>;

export default WebcamOffSquare;
export { WebcamOffSquare };
