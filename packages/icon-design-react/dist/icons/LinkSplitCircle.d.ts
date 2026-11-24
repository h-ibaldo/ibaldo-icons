import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSplitCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSplitCircle: ForwardRefExoticComponent<LinkSplitCircleProps & RefAttributes<SVGSVGElement>>;

export default LinkSplitCircle;
export { LinkSplitCircle };
