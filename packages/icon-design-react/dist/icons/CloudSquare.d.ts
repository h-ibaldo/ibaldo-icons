import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquare: ForwardRefExoticComponent<CloudSquareProps & RefAttributes<SVGSVGElement>>;

export default CloudSquare;
export { CloudSquare };
