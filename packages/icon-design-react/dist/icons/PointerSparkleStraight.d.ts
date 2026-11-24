import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerSparkleStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerSparkleStraight: ForwardRefExoticComponent<PointerSparkleStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerSparkleStraight;
export { PointerSparkleStraight };
