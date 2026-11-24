import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTextXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTextXCircle: ForwardRefExoticComponent<WindowTextXCircleProps & RefAttributes<SVGSVGElement>>;

export default WindowTextXCircle;
export { WindowTextXCircle };
