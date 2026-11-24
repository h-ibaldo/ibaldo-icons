import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRipple: ForwardRefExoticComponent<CursorRippleProps & RefAttributes<SVGSVGElement>>;

export default CursorRipple;
export { CursorRipple };
