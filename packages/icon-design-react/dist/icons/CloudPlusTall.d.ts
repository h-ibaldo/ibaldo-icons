import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPlusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPlusTall: ForwardRefExoticComponent<CloudPlusTallProps & RefAttributes<SVGSVGElement>>;

export default CloudPlusTall;
export { CloudPlusTall };
