import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutGridLabelsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutGridLabels: ForwardRefExoticComponent<LayoutGridLabelsProps & RefAttributes<SVGSVGElement>>;

export default LayoutGridLabels;
export { LayoutGridLabels };
