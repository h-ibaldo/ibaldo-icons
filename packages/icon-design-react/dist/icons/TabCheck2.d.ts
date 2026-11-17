import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheck2: ForwardRefExoticComponent<TabCheck2Props & RefAttributes<SVGSVGElement>>;

export default TabCheck2;
export { TabCheck2 };
