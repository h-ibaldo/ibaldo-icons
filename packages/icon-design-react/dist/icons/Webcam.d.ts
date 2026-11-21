import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Webcam: ForwardRefExoticComponent<WebcamProps & RefAttributes<SVGSVGElement>>;

export default Webcam;
export { Webcam };
