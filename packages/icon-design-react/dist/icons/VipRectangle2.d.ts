import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipRectangle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VipRectangle2: ForwardRefExoticComponent<VipRectangle2Props & RefAttributes<SVGSVGElement>>;

export default VipRectangle2;
export { VipRectangle2 };
