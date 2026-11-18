import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSyncPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSyncPlain: ForwardRefExoticComponent<WindowSyncPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSyncPlain;
export { WindowSyncPlain };
