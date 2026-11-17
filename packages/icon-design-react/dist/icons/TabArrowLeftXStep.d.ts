import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowLeftXStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowLeftXStep: ForwardRefExoticComponent<TabArrowLeftXStepProps & RefAttributes<SVGSVGElement>>;

export default TabArrowLeftXStep;
export { TabArrowLeftXStep };
