import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleBar: ForwardRefExoticComponent<LinkMinusCircleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleBar;
export { LinkMinusCircleBar };
