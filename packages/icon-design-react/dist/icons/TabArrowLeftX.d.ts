import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowLeftXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowLeftX: ForwardRefExoticComponent<TabArrowLeftXProps & RefAttributes<SVGSVGElement>>;

export default TabArrowLeftX;
export { TabArrowLeftX };
