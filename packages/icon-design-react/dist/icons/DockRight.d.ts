import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockRight: ForwardRefExoticComponent<DockRightProps & RefAttributes<SVGSVGElement>>;

export default DockRight;
export { DockRight };
