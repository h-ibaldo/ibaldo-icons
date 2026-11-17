import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningHighRiskProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningHighRisk: ForwardRefExoticComponent<WarningHighRiskProps & RefAttributes<SVGSVGElement>>;

export default WarningHighRisk;
export { WarningHighRisk };
