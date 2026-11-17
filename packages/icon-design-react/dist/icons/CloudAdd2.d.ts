import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAdd2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAdd2: ForwardRefExoticComponent<CloudAdd2Props & RefAttributes<SVGSVGElement>>;

export default CloudAdd2;
export { CloudAdd2 };
