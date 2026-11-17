import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSmall: ForwardRefExoticComponent<WarningSmallProps & RefAttributes<SVGSVGElement>>;

export default WarningSmall;
export { WarningSmall };
