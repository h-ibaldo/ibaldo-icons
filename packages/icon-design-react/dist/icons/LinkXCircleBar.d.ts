import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXCircleBar: ForwardRefExoticComponent<LinkXCircleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkXCircleBar;
export { LinkXCircleBar };
