import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XCircleCompact: ForwardRefExoticComponent<XCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default XCircleCompact;
export { XCircleCompact };
