import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCircleStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCircleStep: ForwardRefExoticComponent<TabCheckCircleStepProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCircleStep;
export { TabCheckCircleStep };
