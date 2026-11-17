import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpgradeProgressBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpgradeProgressBar: ForwardRefExoticComponent<UpgradeProgressBarProps & RefAttributes<SVGSVGElement>>;

export default UpgradeProgressBar;
export { UpgradeProgressBar };
