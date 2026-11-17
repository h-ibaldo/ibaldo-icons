import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleBracket: ForwardRefExoticComponent<LinkDotsCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleBracket;
export { LinkDotsCircleBracket };
