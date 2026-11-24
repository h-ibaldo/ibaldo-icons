import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSadTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSadTall: ForwardRefExoticComponent<CloudSadTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSadTall;
export { CloudSadTall };
