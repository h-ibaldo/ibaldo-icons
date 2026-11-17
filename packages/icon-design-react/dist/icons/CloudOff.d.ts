import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudOff: ForwardRefExoticComponent<CloudOffProps & RefAttributes<SVGSVGElement>>;

export default CloudOff;
export { CloudOff };
