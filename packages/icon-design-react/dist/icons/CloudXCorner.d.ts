import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudXCorner: ForwardRefExoticComponent<CloudXCornerProps & RefAttributes<SVGSVGElement>>;

export default CloudXCorner;
export { CloudXCorner };
