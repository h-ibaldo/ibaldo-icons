import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropMoveInOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropMoveInOut: ForwardRefExoticComponent<DragAndDropMoveInOutProps & RefAttributes<SVGSVGElement>>;

export default DragAndDropMoveInOut;
export { DragAndDropMoveInOut };
