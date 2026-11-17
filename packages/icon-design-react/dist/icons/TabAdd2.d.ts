import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabAdd2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabAdd2: ForwardRefExoticComponent<TabAdd2Props & RefAttributes<SVGSVGElement>>;

export default TabAdd2;
export { TabAdd2 };
