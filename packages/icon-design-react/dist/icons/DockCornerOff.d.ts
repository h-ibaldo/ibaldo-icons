import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockCornerOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockCornerOff: ForwardRefExoticComponent<DockCornerOffProps & RefAttributes<SVGSVGElement>>;

export default DockCornerOff;
export { DockCornerOff };
