import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollHorizontalCheckXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollHorizontalCheckX: ForwardRefExoticComponent<PollHorizontalCheckXProps & RefAttributes<SVGSVGElement>>;

export default PollHorizontalCheckX;
export { PollHorizontalCheckX };
