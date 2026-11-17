import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockVertical: ForwardRefExoticComponent<DockVerticalProps & RefAttributes<SVGSVGElement>>;

export default DockVertical;
export { DockVertical };
