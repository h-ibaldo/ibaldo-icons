import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusBracket: ForwardRefExoticComponent<LinkMinusBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusBracket;
export { LinkMinusBracket };
