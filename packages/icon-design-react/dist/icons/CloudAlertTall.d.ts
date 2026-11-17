import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudAlertTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudAlertTall: ForwardRefExoticComponent<CloudAlertTallProps & RefAttributes<SVGSVGElement>>;

export default CloudAlertTall;
export { CloudAlertTall };
