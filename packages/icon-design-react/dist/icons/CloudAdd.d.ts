import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAdd: ForwardRefExoticComponent<CloudAddProps & RefAttributes<SVGSVGElement>>;

export default CloudAdd;
export { CloudAdd };
