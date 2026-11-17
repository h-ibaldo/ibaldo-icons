import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowUp: ForwardRefExoticComponent<CloudArrowUpProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowUp;
export { CloudArrowUp };
