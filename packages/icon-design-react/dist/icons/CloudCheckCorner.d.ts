import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheckCorner: ForwardRefExoticComponent<CloudCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default CloudCheckCorner;
export { CloudCheckCorner };
