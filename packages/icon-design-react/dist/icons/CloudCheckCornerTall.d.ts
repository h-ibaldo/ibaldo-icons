import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheckCornerTall: ForwardRefExoticComponent<CloudCheckCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudCheckCornerTall;
export { CloudCheckCornerTall };
