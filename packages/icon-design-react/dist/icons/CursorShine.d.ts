import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorShine: ForwardRefExoticComponent<CursorShineProps & RefAttributes<SVGSVGElement>>;

export default CursorShine;
export { CursorShine };
