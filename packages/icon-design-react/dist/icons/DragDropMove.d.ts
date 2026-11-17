import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropMoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropMove: ForwardRefExoticComponent<DragDropMoveProps & RefAttributes<SVGSVGElement>>;

export default DragDropMove;
export { DragDropMove };
