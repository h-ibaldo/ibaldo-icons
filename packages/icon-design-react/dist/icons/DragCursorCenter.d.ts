import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragCursorCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragCursorCenter: ForwardRefExoticComponent<DragCursorCenterProps & RefAttributes<SVGSVGElement>>;

export default DragCursorCenter;
export { DragCursorCenter };
