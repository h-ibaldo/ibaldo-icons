import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCenter: ForwardRefExoticComponent<TabMinusCenterProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCenter;
export { TabMinusCenter };
