import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface JustifyBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const JustifyBottom: ForwardRefExoticComponent<JustifyBottomProps & RefAttributes<SVGSVGElement>>;

export default JustifyBottom;
export { JustifyBottom };
