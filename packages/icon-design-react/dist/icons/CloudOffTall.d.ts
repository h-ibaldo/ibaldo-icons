import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudOffTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudOffTall: ForwardRefExoticComponent<CloudOffTallProps & RefAttributes<SVGSVGElement>>;

export default CloudOffTall;
export { CloudOffTall };
