import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabAdd: ForwardRefExoticComponent<TabAddProps & RefAttributes<SVGSVGElement>>;

export default TabAdd;
export { TabAdd };
