import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsSlanted: ForwardRefExoticComponent<LinkDotsSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsSlanted;
export { LinkDotsSlanted };
