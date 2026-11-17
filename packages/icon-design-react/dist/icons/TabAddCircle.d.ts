import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabAddCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabAddCircle: ForwardRefExoticComponent<TabAddCircleProps & RefAttributes<SVGSVGElement>>;

export default TabAddCircle;
export { TabAddCircle };
