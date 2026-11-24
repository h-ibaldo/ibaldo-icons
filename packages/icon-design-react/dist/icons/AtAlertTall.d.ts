import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtAlertTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtAlertTall: ForwardRefExoticComponent<AtAlertTallProps & RefAttributes<SVGSVGElement>>;

export default AtAlertTall;
export { AtAlertTall };
