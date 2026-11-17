import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XSmall: ForwardRefExoticComponent<XSmallProps & RefAttributes<SVGSVGElement>>;

export default XSmall;
export { XSmall };
