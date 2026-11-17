import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertDiamondProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertDiamond: ForwardRefExoticComponent<AlertDiamondProps & RefAttributes<SVGSVGElement>>;

export default AlertDiamond;
export { AlertDiamond };
