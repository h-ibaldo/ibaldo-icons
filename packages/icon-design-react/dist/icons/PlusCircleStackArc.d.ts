import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusCircleStackArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusCircleStackArc: ForwardRefExoticComponent<PlusCircleStackArcProps & RefAttributes<SVGSVGElement>>;

export default PlusCircleStackArc;
export { PlusCircleStackArc };
