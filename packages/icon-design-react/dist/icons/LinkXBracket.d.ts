import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXBracket: ForwardRefExoticComponent<LinkXBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkXBracket;
export { LinkXBracket };
