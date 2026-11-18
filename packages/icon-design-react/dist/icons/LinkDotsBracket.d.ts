import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsBracket: ForwardRefExoticComponent<LinkDotsBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsBracket;
export { LinkDotsBracket };
