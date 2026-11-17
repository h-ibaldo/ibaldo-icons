import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudXTall: ForwardRefExoticComponent<CloudXTallProps & RefAttributes<SVGSVGElement>>;

export default CloudXTall;
export { CloudXTall };
