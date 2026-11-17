import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudReceiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudReceive: ForwardRefExoticComponent<CloudReceiveProps & RefAttributes<SVGSVGElement>>;

export default CloudReceive;
export { CloudReceive };
