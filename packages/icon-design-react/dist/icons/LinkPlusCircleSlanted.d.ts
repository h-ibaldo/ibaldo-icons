import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCircleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCircleSlanted: ForwardRefExoticComponent<LinkPlusCircleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCircleSlanted;
export { LinkPlusCircleSlanted };
