import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabAddPlus: ForwardRefExoticComponent<TabAddPlusProps & RefAttributes<SVGSVGElement>>;

export default TabAddPlus;
export { TabAddPlus };
