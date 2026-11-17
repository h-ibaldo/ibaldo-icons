import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockLeft: ForwardRefExoticComponent<DockLeftProps & RefAttributes<SVGSVGElement>>;

export default DockLeft;
export { DockLeft };
