import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningDashed: ForwardRefExoticComponent<WarningDashedProps & RefAttributes<SVGSVGElement>>;

export default WarningDashed;
export { WarningDashed };
