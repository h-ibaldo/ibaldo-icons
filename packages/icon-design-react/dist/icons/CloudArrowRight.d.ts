import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowRight: ForwardRefExoticComponent<CloudArrowRightProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowRight;
export { CloudArrowRight };
