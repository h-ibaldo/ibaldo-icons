import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerPlusCircleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerPlusCircleStraight: ForwardRefExoticComponent<PointerPlusCircleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerPlusCircleStraight;
export { PointerPlusCircleStraight };
