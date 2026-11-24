import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamRound: ForwardRefExoticComponent<WebcamRoundProps & RefAttributes<SVGSVGElement>>;

export default WebcamRound;
export { WebcamRound };
