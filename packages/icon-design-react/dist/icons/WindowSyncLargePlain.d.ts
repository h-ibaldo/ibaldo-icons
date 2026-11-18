import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSyncLargePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSyncLargePlain: ForwardRefExoticComponent<WindowSyncLargePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSyncLargePlain;
export { WindowSyncLargePlain };
