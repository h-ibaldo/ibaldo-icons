import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpRippleDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpRippleDouble: ForwardRefExoticComponent<CursorUpRippleDoubleProps & RefAttributes<SVGSVGElement>>;

export default CursorUpRippleDouble;
export { CursorUpRippleDouble };
