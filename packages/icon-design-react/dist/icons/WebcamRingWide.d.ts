import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamRingWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamRingWide: ForwardRefExoticComponent<WebcamRingWideProps & RefAttributes<SVGSVGElement>>;

export default WebcamRingWide;
export { WebcamRingWide };
