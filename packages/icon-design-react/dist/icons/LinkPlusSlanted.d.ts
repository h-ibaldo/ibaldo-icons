import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusSlanted: ForwardRefExoticComponent<LinkPlusSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusSlanted;
export { LinkPlusSlanted };
