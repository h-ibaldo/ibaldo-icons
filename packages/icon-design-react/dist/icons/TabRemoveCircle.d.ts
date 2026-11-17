import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabRemoveCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabRemoveCircle: ForwardRefExoticComponent<TabRemoveCircleProps & RefAttributes<SVGSVGElement>>;

export default TabRemoveCircle;
export { TabRemoveCircle };
