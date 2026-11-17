import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlus: ForwardRefExoticComponent<TabPlusProps & RefAttributes<SVGSVGElement>>;

export default TabPlus;
export { TabPlus };
