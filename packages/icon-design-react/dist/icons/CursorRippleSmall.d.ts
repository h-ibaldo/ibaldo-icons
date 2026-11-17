import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRippleSmall: ForwardRefExoticComponent<CursorRippleSmallProps & RefAttributes<SVGSVGElement>>;

export default CursorRippleSmall;
export { CursorRippleSmall };
