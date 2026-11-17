import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSad: ForwardRefExoticComponent<CloudSadProps & RefAttributes<SVGSVGElement>>;

export default CloudSad;
export { CloudSad };
