import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListLines: ForwardRefExoticComponent<LayoutListLinesProps & RefAttributes<SVGSVGElement>>;

export default LayoutListLines;
export { LayoutListLines };
