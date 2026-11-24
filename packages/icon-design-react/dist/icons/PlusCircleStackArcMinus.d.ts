import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusCircleStackArcMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusCircleStackArcMinus: ForwardRefExoticComponent<PlusCircleStackArcMinusProps & RefAttributes<SVGSVGElement>>;

export default PlusCircleStackArcMinus;
export { PlusCircleStackArcMinus };
