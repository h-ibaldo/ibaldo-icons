import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRefreshTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRefreshTall: ForwardRefExoticComponent<CloudRefreshTallProps & RefAttributes<SVGSVGElement>>;

export default CloudRefreshTall;
export { CloudRefreshTall };
