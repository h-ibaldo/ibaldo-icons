import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDrop: ForwardRefExoticComponent<DragDropProps & RefAttributes<SVGSVGElement>>;

export default DragDrop;
export { DragDrop };
