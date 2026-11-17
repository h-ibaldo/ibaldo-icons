import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckmarkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckmark: ForwardRefExoticComponent<TabCheckmarkProps & RefAttributes<SVGSVGElement>>;

export default TabCheckmark;
export { TabCheckmark };
