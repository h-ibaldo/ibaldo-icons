import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusBracket: ForwardRefExoticComponent<LinkPlusBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusBracket;
export { LinkPlusBracket };
