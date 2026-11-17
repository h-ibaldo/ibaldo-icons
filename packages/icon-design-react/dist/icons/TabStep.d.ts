import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabStep: ForwardRefExoticComponent<TabStepProps & RefAttributes<SVGSVGElement>>;

export default TabStep;
export { TabStep };
