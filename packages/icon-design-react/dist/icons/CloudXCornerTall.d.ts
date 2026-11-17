import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudXCornerTall: ForwardRefExoticComponent<CloudXCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudXCornerTall;
export { CloudXCornerTall };
