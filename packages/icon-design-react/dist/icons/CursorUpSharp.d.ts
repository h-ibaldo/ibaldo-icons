import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpSharp: ForwardRefExoticComponent<CursorUpSharpProps & RefAttributes<SVGSVGElement>>;

export default CursorUpSharp;
export { CursorUpSharp };
