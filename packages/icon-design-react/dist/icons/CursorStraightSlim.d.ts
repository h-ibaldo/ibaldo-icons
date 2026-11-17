import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorStraightSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorStraightSlim: ForwardRefExoticComponent<CursorStraightSlimProps & RefAttributes<SVGSVGElement>>;

export default CursorStraightSlim;
export { CursorStraightSlim };
