import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSearch3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSearch3: ForwardRefExoticComponent<CloudSearch3Props & RefAttributes<SVGSVGElement>>;

export default CloudSearch3;
export { CloudSearch3 };
