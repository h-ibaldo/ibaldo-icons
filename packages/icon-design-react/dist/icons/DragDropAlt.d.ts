import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropAlt: ForwardRefExoticComponent<DragDropAltProps & RefAttributes<SVGSVGElement>>;

export default DragDropAlt;
export { DragDropAlt };
