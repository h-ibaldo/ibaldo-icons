import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleCheckBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleCheckBracket: ForwardRefExoticComponent<LinkCircleCheckBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleCheckBracket;
export { LinkCircleCheckBracket };
