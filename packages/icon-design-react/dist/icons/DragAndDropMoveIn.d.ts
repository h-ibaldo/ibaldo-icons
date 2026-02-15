import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropMoveInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropMoveIn: ForwardRefExoticComponent<DragAndDropMoveInProps & RefAttributes<SVGSVGElement>>;

export default DragAndDropMoveIn;
export { DragAndDropMoveIn };
