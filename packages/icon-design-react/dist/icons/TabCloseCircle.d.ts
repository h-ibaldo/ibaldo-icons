import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCloseCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCloseCircle: ForwardRefExoticComponent<TabCloseCircleProps & RefAttributes<SVGSVGElement>>;

export default TabCloseCircle;
export { TabCloseCircle };
