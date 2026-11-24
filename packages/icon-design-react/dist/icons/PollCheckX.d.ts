import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollCheckXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollCheckX: ForwardRefExoticComponent<PollCheckXProps & RefAttributes<SVGSVGElement>>;

export default PollCheckX;
export { PollCheckX };
