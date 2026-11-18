import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerStraight: ForwardRefExoticComponent<PointerStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerStraight;
export { PointerStraight };
