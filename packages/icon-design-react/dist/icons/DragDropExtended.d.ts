import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropExtendedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropExtended: ForwardRefExoticComponent<DragDropExtendedProps & RefAttributes<SVGSVGElement>>;

export default DragDropExtended;
export { DragDropExtended };
