import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLinkBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLinkBracket: ForwardRefExoticComponent<SquareStackLinkBracketProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLinkBracket;
export { SquareStackLinkBracket };
