import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSplitApartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSplitApart: ForwardRefExoticComponent<LinkSplitApartProps & RefAttributes<SVGSVGElement>>;

export default LinkSplitApart;
export { LinkSplitApart };
