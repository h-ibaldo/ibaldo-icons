import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleDoubleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRippleDoubleSharp: ForwardRefExoticComponent<CursorRippleDoubleSharpProps & RefAttributes<SVGSVGElement>>;

export default CursorRippleDoubleSharp;
export { CursorRippleDoubleSharp };
