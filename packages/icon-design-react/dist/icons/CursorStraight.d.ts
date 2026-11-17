import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorStraight: ForwardRefExoticComponent<CursorStraightProps & RefAttributes<SVGSVGElement>>;

export default CursorStraight;
export { CursorStraight };
