import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderBottom: ForwardRefExoticComponent<BorderBottomProps & RefAttributes<SVGSVGElement>>;

export default BorderBottom;
export { BorderBottom };
