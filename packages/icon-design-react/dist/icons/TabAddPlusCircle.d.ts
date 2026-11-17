import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabAddPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabAddPlusCircle: ForwardRefExoticComponent<TabAddPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default TabAddPlusCircle;
export { TabAddPlusCircle };
