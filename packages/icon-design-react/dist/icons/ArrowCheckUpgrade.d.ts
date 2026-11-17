import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCheckUpgradeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCheckUpgrade: ForwardRefExoticComponent<ArrowCheckUpgradeProps & RefAttributes<SVGSVGElement>>;

export default ArrowCheckUpgrade;
export { ArrowCheckUpgrade };
