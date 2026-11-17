import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusStep: ForwardRefExoticComponent<TabMinusStepProps & RefAttributes<SVGSVGElement>>;

export default TabMinusStep;
export { TabMinusStep };
