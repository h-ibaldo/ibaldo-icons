import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XSquareCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XSquareCompact: ForwardRefExoticComponent<XSquareCompactProps & RefAttributes<SVGSVGElement>>;

export default XSquareCompact;
export { XSquareCompact };
