import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XCircleStackArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XCircleStackArc: ForwardRefExoticComponent<XCircleStackArcProps & RefAttributes<SVGSVGElement>>;

export default XCircleStackArc;
export { XCircleStackArc };
