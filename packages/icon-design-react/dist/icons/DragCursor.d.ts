import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragCursor: ForwardRefExoticComponent<DragCursorProps & RefAttributes<SVGSVGElement>>;

export default DragCursor;
export { DragCursor };
