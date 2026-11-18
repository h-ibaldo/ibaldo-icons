import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorSquareCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorSquareCorner: ForwardRefExoticComponent<CursorSquareCornerProps & RefAttributes<SVGSVGElement>>;

export default CursorSquareCorner;
export { CursorSquareCorner };
