import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleBracket: ForwardRefExoticComponent<LinkCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleBracket;
export { LinkCircleBracket };
