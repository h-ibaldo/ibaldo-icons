import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeCursor: ForwardRefExoticComponent<GlobeCursorProps & RefAttributes<SVGSVGElement>>;

export default GlobeCursor;
export { GlobeCursor };
