import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCircle: ForwardRefExoticComponent<TabPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCircle;
export { TabPlusCircle };
