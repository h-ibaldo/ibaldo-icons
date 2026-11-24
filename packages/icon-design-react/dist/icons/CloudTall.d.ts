import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudTall: ForwardRefExoticComponent<CloudTallProps & RefAttributes<SVGSVGElement>>;

export default CloudTall;
export { CloudTall };
