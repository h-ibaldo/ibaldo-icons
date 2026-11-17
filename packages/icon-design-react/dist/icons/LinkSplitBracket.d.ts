import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSplitBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSplitBracket: ForwardRefExoticComponent<LinkSplitBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkSplitBracket;
export { LinkSplitBracket };
