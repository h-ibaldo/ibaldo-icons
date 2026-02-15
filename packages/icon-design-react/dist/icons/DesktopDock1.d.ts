import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DesktopDock1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DesktopDock1: ForwardRefExoticComponent<DesktopDock1Props & RefAttributes<SVGSVGElement>>;

export default DesktopDock1;
export { DesktopDock1 };
