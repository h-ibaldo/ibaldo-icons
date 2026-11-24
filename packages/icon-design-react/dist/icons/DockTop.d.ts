import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockTop: ForwardRefExoticComponent<DockTopProps & RefAttributes<SVGSVGElement>>;

export default DockTop;
export { DockTop };
