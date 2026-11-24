import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheck: ForwardRefExoticComponent<CloudCheckProps & RefAttributes<SVGSVGElement>>;

export default CloudCheck;
export { CloudCheck };
