import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XCircleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XCircleSmall: ForwardRefExoticComponent<XCircleSmallProps & RefAttributes<SVGSVGElement>>;

export default XCircleSmall;
export { XCircleSmall };
