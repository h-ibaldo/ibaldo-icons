import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAdd3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAdd3: ForwardRefExoticComponent<CloudAdd3Props & RefAttributes<SVGSVGElement>>;

export default CloudAdd3;
export { CloudAdd3 };
