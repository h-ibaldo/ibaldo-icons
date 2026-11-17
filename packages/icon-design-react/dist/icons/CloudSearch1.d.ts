import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSearch1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSearch1: ForwardRefExoticComponent<CloudSearch1Props & RefAttributes<SVGSVGElement>>;

export default CloudSearch1;
export { CloudSearch1 };
