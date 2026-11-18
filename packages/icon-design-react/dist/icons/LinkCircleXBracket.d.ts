import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleXBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleXBracket: ForwardRefExoticComponent<LinkCircleXBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleXBracket;
export { LinkCircleXBracket };
