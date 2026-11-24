import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XUndoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XUndo: ForwardRefExoticComponent<XUndoProps & RefAttributes<SVGSVGElement>>;

export default XUndo;
export { XUndo };
