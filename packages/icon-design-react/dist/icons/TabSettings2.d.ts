import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabSettings2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabSettings2: ForwardRefExoticComponent<TabSettings2Props & RefAttributes<SVGSVGElement>>;

export default TabSettings2;
export { TabSettings2 };
