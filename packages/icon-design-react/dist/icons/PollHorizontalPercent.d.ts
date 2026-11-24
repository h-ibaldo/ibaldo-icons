import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollHorizontalPercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollHorizontalPercent: ForwardRefExoticComponent<PollHorizontalPercentProps & RefAttributes<SVGSVGElement>>;

export default PollHorizontalPercent;
export { PollHorizontalPercent };
