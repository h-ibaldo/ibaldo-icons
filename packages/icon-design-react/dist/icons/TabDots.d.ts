import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDots: ForwardRefExoticComponent<TabDotsProps & RefAttributes<SVGSVGElement>>;

export default TabDots;
export { TabDots };
