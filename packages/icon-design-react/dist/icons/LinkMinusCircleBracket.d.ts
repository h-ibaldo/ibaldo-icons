import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleBracket: ForwardRefExoticComponent<LinkMinusCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleBracket;
export { LinkMinusCircleBracket };
