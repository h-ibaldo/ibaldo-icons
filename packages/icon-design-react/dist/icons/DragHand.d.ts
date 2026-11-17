import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragHandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragHand: ForwardRefExoticComponent<DragHandProps & RefAttributes<SVGSVGElement>>;

export default DragHand;
export { DragHand };
