import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpSlanted: ForwardRefExoticComponent<LinkArrowUpSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpSlanted;
export { LinkArrowUpSlanted };
