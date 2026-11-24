import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSearch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSearch2: ForwardRefExoticComponent<CloudSearch2Props & RefAttributes<SVGSVGElement>>;

export default CloudSearch2;
export { CloudSearch2 };
