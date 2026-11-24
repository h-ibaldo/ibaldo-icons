import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabX: ForwardRefExoticComponent<TabXProps & RefAttributes<SVGSVGElement>>;

export default TabX;
export { TabX };
