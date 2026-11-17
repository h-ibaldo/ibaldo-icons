import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCenter: ForwardRefExoticComponent<TabXCenterProps & RefAttributes<SVGSVGElement>>;

export default TabXCenter;
export { TabXCenter };
