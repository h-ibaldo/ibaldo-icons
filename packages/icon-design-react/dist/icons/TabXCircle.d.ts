import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCircle: ForwardRefExoticComponent<TabXCircleProps & RefAttributes<SVGSVGElement>>;

export default TabXCircle;
export { TabXCircle };
