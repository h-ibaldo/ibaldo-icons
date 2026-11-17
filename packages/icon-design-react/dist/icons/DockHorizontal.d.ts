import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockHorizontal: ForwardRefExoticComponent<DockHorizontalProps & RefAttributes<SVGSVGElement>>;

export default DockHorizontal;
export { DockHorizontal };
