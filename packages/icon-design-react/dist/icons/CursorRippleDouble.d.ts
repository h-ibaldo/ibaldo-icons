import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRippleDouble: ForwardRefExoticComponent<CursorRippleDoubleProps & RefAttributes<SVGSVGElement>>;

export default CursorRippleDouble;
export { CursorRippleDouble };
