import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCircleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCircleNotched: ForwardRefExoticComponent<LinkPlusCircleNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCircleNotched;
export { LinkPlusCircleNotched };
