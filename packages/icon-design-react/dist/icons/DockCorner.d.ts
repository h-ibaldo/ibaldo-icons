import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockCorner: ForwardRefExoticComponent<DockCornerProps & RefAttributes<SVGSVGElement>>;

export default DockCorner;
export { DockCorner };
