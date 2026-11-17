import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSplitSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSplitSlanted: ForwardRefExoticComponent<LinkSplitSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkSplitSlanted;
export { LinkSplitSlanted };
