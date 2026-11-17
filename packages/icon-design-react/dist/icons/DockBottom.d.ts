import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DockBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DockBottom: ForwardRefExoticComponent<DockBottomProps & RefAttributes<SVGSVGElement>>;

export default DockBottom;
export { DockBottom };
