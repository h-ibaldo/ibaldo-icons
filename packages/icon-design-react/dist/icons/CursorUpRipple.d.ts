import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpRippleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpRipple: ForwardRefExoticComponent<CursorUpRippleProps & RefAttributes<SVGSVGElement>>;

export default CursorUpRipple;
export { CursorUpRipple };
