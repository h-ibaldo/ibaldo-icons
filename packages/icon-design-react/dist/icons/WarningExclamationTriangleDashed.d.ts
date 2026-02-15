import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningExclamationTriangleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningExclamationTriangleDashed: ForwardRefExoticComponent<WarningExclamationTriangleDashedProps & RefAttributes<SVGSVGElement>>;

export default WarningExclamationTriangleDashed;
export { WarningExclamationTriangleDashed };
