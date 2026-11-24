import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSyncLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSyncLarge: ForwardRefExoticComponent<WindowSyncLargeProps & RefAttributes<SVGSVGElement>>;

export default WindowSyncLarge;
export { WindowSyncLarge };
