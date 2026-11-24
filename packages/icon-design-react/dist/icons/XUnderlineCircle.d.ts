import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XUnderlineCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XUnderlineCircle: ForwardRefExoticComponent<XUnderlineCircleProps & RefAttributes<SVGSVGElement>>;

export default XUnderlineCircle;
export { XUnderlineCircle };
