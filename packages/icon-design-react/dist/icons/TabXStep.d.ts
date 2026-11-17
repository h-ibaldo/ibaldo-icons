import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXStep: ForwardRefExoticComponent<TabXStepProps & RefAttributes<SVGSVGElement>>;

export default TabXStep;
export { TabXStep };
