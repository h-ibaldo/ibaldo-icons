import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheck: ForwardRefExoticComponent<TabCheckProps & RefAttributes<SVGSVGElement>>;

export default TabCheck;
export { TabCheck };
