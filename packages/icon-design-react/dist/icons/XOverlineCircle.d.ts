import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XOverlineCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XOverlineCircle: ForwardRefExoticComponent<XOverlineCircleProps & RefAttributes<SVGSVGElement>>;

export default XOverlineCircle;
export { XOverlineCircle };
