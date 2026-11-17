import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenCircle: ForwardRefExoticComponent<LinkBrokenCircleProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenCircle;
export { LinkBrokenCircle };
