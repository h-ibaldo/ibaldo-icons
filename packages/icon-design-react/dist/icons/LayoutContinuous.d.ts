import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutContinuousProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutContinuous: ForwardRefExoticComponent<LayoutContinuousProps & RefAttributes<SVGSVGElement>>;

export default LayoutContinuous;
export { LayoutContinuous };
