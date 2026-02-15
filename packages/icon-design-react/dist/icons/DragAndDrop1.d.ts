import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDrop1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDrop1: ForwardRefExoticComponent<DragAndDrop1Props & RefAttributes<SVGSVGElement>>;

export default DragAndDrop1;
export { DragAndDrop1 };
