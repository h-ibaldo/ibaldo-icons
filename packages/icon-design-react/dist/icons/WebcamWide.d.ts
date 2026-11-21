import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebcamWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebcamWide: ForwardRefExoticComponent<WebcamWideProps & RefAttributes<SVGSVGElement>>;

export default WebcamWide;
export { WebcamWide };
