import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollPercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollPercent: ForwardRefExoticComponent<PollPercentProps & RefAttributes<SVGSVGElement>>;

export default PollPercent;
export { PollPercent };
