import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowVertical: ForwardRefExoticComponent<CloudArrowVerticalProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowVertical;
export { CloudArrowVertical };
