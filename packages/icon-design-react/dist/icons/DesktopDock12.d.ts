import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DesktopDock12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DesktopDock12: ForwardRefExoticComponent<DesktopDock12Props & RefAttributes<SVGSVGElement>>;

export default DesktopDock12;
export { DesktopDock12 };
