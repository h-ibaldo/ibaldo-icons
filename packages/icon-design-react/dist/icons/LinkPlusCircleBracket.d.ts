import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusCircleBracket: ForwardRefExoticComponent<LinkPlusCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusCircleBracket;
export { LinkPlusCircleBracket };
