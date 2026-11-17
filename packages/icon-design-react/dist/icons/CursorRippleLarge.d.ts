import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRippleLarge: ForwardRefExoticComponent<CursorRippleLargeProps & RefAttributes<SVGSVGElement>>;

export default CursorRippleLarge;
export { CursorRippleLarge };
