import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropMoveIn2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropMoveIn2: ForwardRefExoticComponent<DragAndDropMoveIn2Props & RefAttributes<SVGSVGElement>>;

export default DragAndDropMoveIn2;
export { DragAndDropMoveIn2 };
