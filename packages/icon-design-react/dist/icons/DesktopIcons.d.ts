import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DesktopIconsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DesktopIcons: ForwardRefExoticComponent<DesktopIconsProps & RefAttributes<SVGSVGElement>>;

export default DesktopIcons;
export { DesktopIcons };
