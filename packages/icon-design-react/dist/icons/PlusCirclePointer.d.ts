import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusCirclePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusCirclePointer: ForwardRefExoticComponent<PlusCirclePointerProps & RefAttributes<SVGSVGElement>>;

export default PlusCirclePointer;
export { PlusCirclePointer };
