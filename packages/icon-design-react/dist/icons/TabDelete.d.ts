import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDeleteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDelete: ForwardRefExoticComponent<TabDeleteProps & RefAttributes<SVGSVGElement>>;

export default TabDelete;
export { TabDelete };
