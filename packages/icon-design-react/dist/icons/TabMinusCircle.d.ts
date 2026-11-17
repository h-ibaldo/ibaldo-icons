import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCircle: ForwardRefExoticComponent<TabMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCircle;
export { TabMinusCircle };
