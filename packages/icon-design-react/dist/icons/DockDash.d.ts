import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockDash: ForwardRefExoticComponent<DockDashProps & RefAttributes<SVGSVGElement>>;

export default DockDash;
export { DockDash };
