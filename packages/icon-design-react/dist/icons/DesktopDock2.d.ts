import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DesktopDock2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DesktopDock2: ForwardRefExoticComponent<DesktopDock2Props & RefAttributes<SVGSVGElement>>;

export default DesktopDock2;
export { DesktopDock2 };
