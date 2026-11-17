import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorStraight2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorStraight2: ForwardRefExoticComponent<CursorStraight2Props & RefAttributes<SVGSVGElement>>;

export default CursorStraight2;
export { CursorStraight2 };
