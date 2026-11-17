import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRefreshCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRefreshCornerTall: ForwardRefExoticComponent<CloudRefreshCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudRefreshCornerTall;
export { CloudRefreshCornerTall };
