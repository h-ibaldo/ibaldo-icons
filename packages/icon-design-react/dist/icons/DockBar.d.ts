import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockBar: ForwardRefExoticComponent<DockBarProps & RefAttributes<SVGSVGElement>>;

export default DockBar;
export { DockBar };
