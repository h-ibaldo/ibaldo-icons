import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabFloppySaveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabFloppySave: ForwardRefExoticComponent<TabFloppySaveProps & RefAttributes<SVGSVGElement>>;

export default TabFloppySave;
export { TabFloppySave };
