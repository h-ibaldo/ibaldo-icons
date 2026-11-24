import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXCircleBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXCircleBracket: ForwardRefExoticComponent<LinkXCircleBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkXCircleBracket;
export { LinkXCircleBracket };
