import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerXStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerXStraight: ForwardRefExoticComponent<PointerXStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerXStraight;
export { PointerXStraight };
