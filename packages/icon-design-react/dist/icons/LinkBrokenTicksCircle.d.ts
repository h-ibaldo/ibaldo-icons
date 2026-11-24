import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenTicksCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenTicksCircle: ForwardRefExoticComponent<LinkBrokenTicksCircleProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenTicksCircle;
export { LinkBrokenTicksCircle };
