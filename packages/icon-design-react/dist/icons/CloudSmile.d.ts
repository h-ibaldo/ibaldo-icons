import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSmileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSmile: ForwardRefExoticComponent<CloudSmileProps & RefAttributes<SVGSVGElement>>;

export default CloudSmile;
export { CloudSmile };
