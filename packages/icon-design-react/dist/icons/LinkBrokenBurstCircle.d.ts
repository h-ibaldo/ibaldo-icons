import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstCircle: ForwardRefExoticComponent<LinkBrokenBurstCircleProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstCircle;
export { LinkBrokenBurstCircle };
