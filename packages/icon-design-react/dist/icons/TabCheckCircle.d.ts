import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCircle: ForwardRefExoticComponent<TabCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCircle;
export { TabCheckCircle };
