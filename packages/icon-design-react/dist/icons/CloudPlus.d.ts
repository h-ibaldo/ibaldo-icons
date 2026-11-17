import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPlus: ForwardRefExoticComponent<CloudPlusProps & RefAttributes<SVGSVGElement>>;

export default CloudPlus;
export { CloudPlus };
