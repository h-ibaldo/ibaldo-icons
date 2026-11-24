import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudWarningTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudWarningTall: ForwardRefExoticComponent<CloudWarningTallProps & RefAttributes<SVGSVGElement>>;

export default CloudWarningTall;
export { CloudWarningTall };
