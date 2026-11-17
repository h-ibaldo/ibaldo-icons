import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPlusCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPlusCornerTall: ForwardRefExoticComponent<CloudPlusCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudPlusCornerTall;
export { CloudPlusCornerTall };
