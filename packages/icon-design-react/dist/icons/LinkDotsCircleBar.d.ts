import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleBar: ForwardRefExoticComponent<LinkDotsCircleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleBar;
export { LinkDotsCircleBar };
