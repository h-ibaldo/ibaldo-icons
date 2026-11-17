import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAlert2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAlert2: ForwardRefExoticComponent<CloudAlert2Props & RefAttributes<SVGSVGElement>>;

export default CloudAlert2;
export { CloudAlert2 };
