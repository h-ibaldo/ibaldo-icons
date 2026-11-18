import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCircleBar: ForwardRefExoticComponent<LinkPlusCircleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCircleBar;
export { LinkPlusCircleBar };
