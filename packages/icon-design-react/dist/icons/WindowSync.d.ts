import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSync: ForwardRefExoticComponent<WindowSyncProps & RefAttributes<SVGSVGElement>>;

export default WindowSync;
export { WindowSync };
