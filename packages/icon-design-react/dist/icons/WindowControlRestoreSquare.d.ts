import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlRestoreSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlRestoreSquare: ForwardRefExoticComponent<WindowControlRestoreSquareProps & RefAttributes<SVGSVGElement>>;

export default WindowControlRestoreSquare;
export { WindowControlRestoreSquare };
