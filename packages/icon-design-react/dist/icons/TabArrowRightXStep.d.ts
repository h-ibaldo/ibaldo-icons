import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowRightXStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowRightXStep: ForwardRefExoticComponent<TabArrowRightXStepProps & RefAttributes<SVGSVGElement>>;

export default TabArrowRightXStep;
export { TabArrowRightXStep };
