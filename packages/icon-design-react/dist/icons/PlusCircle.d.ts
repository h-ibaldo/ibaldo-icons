import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusCircle: ForwardRefExoticComponent<PlusCircleProps & RefAttributes<SVGSVGElement>>;

export default PlusCircle;
export { PlusCircle };
