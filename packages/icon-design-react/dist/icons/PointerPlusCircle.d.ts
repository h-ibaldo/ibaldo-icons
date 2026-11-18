import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerPlusCircle: ForwardRefExoticComponent<PointerPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default PointerPlusCircle;
export { PointerPlusCircle };
