import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerBanStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerBanStraight: ForwardRefExoticComponent<PointerBanStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerBanStraight;
export { PointerBanStraight };
