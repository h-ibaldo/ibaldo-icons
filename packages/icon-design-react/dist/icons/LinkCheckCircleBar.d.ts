import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleBar: ForwardRefExoticComponent<LinkCheckCircleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleBar;
export { LinkCheckCircleBar };
