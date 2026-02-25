import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipLines2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VipLines2: ForwardRefExoticComponent<VipLines2Props & RefAttributes<SVGSVGElement>>;

export default VipLines2;
export { VipLines2 };
