import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamOff: ForwardRefExoticComponent<WebcamOffProps & RefAttributes<SVGSVGElement>>;

export default WebcamOff;
export { WebcamOff };
