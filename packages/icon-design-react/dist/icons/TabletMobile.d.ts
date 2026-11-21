import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabletMobileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabletMobile: ForwardRefExoticComponent<TabletMobileProps & RefAttributes<SVGSVGElement>>;

export default TabletMobile;
export { TabletMobile };
