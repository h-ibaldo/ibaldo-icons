import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowDown: ForwardRefExoticComponent<CloudArrowDownProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowDown;
export { CloudArrowDown };
