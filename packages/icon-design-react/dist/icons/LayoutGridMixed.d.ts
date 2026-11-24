import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutGridMixedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutGridMixed: ForwardRefExoticComponent<LayoutGridMixedProps & RefAttributes<SVGSVGElement>>;

export default LayoutGridMixed;
export { LayoutGridMixed };
