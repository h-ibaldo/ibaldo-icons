import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheckTall: ForwardRefExoticComponent<CloudCheckTallProps & RefAttributes<SVGSVGElement>>;

export default CloudCheckTall;
export { CloudCheckTall };
