import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowRightXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowRightX: ForwardRefExoticComponent<TabArrowRightXProps & RefAttributes<SVGSVGElement>>;

export default TabArrowRightX;
export { TabArrowRightX };
