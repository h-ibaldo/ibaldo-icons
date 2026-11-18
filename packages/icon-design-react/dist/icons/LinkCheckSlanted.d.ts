import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckSlanted: ForwardRefExoticComponent<LinkCheckSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckSlanted;
export { LinkCheckSlanted };
