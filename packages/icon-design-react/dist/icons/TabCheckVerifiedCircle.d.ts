import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckVerifiedCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckVerifiedCircle: ForwardRefExoticComponent<TabCheckVerifiedCircleProps & RefAttributes<SVGSVGElement>>;

export default TabCheckVerifiedCircle;
export { TabCheckVerifiedCircle };
