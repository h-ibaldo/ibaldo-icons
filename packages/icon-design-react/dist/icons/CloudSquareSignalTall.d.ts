import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareSignalTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareSignalTall: ForwardRefExoticComponent<CloudSquareSignalTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareSignalTall;
export { CloudSquareSignalTall };
