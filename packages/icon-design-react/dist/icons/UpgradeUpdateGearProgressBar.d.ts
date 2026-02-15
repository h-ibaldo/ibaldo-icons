import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpgradeUpdateGearProgressBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpgradeUpdateGearProgressBar: ForwardRefExoticComponent<UpgradeUpdateGearProgressBarProps & RefAttributes<SVGSVGElement>>;

export default UpgradeUpdateGearProgressBar;
export { UpgradeUpdateGearProgressBar };
