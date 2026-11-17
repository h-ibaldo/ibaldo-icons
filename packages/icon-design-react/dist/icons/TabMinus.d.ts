import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinus: ForwardRefExoticComponent<TabMinusProps & RefAttributes<SVGSVGElement>>;

export default TabMinus;
export { TabMinus };
