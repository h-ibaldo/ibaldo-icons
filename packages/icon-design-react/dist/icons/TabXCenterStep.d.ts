import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCenterStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCenterStep: ForwardRefExoticComponent<TabXCenterStepProps & RefAttributes<SVGSVGElement>>;

export default TabXCenterStep;
export { TabXCenterStep };
