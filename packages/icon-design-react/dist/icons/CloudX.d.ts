import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudX: ForwardRefExoticComponent<CloudXProps & RefAttributes<SVGSVGElement>>;

export default CloudX;
export { CloudX };
