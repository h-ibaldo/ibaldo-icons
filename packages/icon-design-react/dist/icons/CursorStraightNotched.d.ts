import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorStraightNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorStraightNotched: ForwardRefExoticComponent<CursorStraightNotchedProps & RefAttributes<SVGSVGElement>>;

export default CursorStraightNotched;
export { CursorStraightNotched };
