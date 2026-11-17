import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XCircle: ForwardRefExoticComponent<XCircleProps & RefAttributes<SVGSVGElement>>;

export default XCircle;
export { XCircle };
