import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorRippleDoubleStemProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorRippleDoubleStem: ForwardRefExoticComponent<CursorRippleDoubleStemProps & RefAttributes<SVGSVGElement>>;

export default CursorRippleDoubleStem;
export { CursorRippleDoubleStem };
