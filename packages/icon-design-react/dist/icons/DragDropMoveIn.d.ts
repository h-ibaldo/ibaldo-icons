import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropMoveInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropMoveIn: ForwardRefExoticComponent<DragDropMoveInProps & RefAttributes<SVGSVGElement>>;

export default DragDropMoveIn;
export { DragDropMoveIn };
