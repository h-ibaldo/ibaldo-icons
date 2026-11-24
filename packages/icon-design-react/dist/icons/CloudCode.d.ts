import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCode: ForwardRefExoticComponent<CloudCodeProps & RefAttributes<SVGSVGElement>>;

export default CloudCode;
export { CloudCode };
