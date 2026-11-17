import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAlert3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAlert3: ForwardRefExoticComponent<CloudAlert3Props & RefAttributes<SVGSVGElement>>;

export default CloudAlert3;
export { CloudAlert3 };
