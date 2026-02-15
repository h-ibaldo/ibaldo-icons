import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowControlRestoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowControlRestore: ForwardRefExoticComponent<WindowControlRestoreProps & RefAttributes<SVGSVGElement>>;

export default WindowControlRestore;
export { WindowControlRestore };
