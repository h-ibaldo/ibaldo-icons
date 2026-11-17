import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningForbiddenBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningForbiddenBar: ForwardRefExoticComponent<WarningForbiddenBarProps & RefAttributes<SVGSVGElement>>;

export default WarningForbiddenBar;
export { WarningForbiddenBar };
