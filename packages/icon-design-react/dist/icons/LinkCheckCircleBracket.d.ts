import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleBracket: ForwardRefExoticComponent<LinkCheckCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleBracket;
export { LinkCheckCircleBracket };
