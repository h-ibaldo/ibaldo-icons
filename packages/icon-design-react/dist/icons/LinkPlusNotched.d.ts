import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusNotched: ForwardRefExoticComponent<LinkPlusNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusNotched;
export { LinkPlusNotched };
