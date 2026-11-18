import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpShine: ForwardRefExoticComponent<CursorUpShineProps & RefAttributes<SVGSVGElement>>;

export default CursorUpShine;
export { CursorUpShine };
