import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCenter: ForwardRefExoticComponent<TabCheckCenterProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCenter;
export { TabCheckCenter };
