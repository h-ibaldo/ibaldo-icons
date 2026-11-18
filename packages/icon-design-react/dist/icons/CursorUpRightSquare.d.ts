import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUpRightSquare: ForwardRefExoticComponent<CursorUpRightSquareProps & RefAttributes<SVGSVGElement>>;

export default CursorUpRightSquare;
export { CursorUpRightSquare };
