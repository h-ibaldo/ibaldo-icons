import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCenter: ForwardRefExoticComponent<TabPlusCenterProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCenter;
export { TabPlusCenter };
