import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBracket: ForwardRefExoticComponent<LinkBrokenBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBracket;
export { LinkBrokenBracket };
