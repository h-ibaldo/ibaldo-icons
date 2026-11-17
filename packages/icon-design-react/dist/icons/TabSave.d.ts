import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabSaveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabSave: ForwardRefExoticComponent<TabSaveProps & RefAttributes<SVGSVGElement>>;

export default TabSave;
export { TabSave };
