import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTriangle: ForwardRefExoticComponent<CloudTriangleProps & RefAttributes<SVGSVGElement>>;

export default CloudTriangle;
export { CloudTriangle };
