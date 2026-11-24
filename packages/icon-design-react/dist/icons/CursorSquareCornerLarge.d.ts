import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorSquareCornerLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorSquareCornerLarge: ForwardRefExoticComponent<CursorSquareCornerLargeProps & RefAttributes<SVGSVGElement>>;

export default CursorSquareCornerLarge;
export { CursorSquareCornerLarge };
