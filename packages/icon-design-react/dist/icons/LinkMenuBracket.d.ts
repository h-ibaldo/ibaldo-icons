import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuBracket: ForwardRefExoticComponent<LinkMenuBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuBracket;
export { LinkMenuBracket };
