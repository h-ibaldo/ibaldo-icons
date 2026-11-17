import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowLeftShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowLeftShort: ForwardRefExoticComponent<LinkCircleArrowLeftShortProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowLeftShort;
export { LinkCircleArrowLeftShort };
