import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpBracket: ForwardRefExoticComponent<LinkArrowUpBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpBracket;
export { LinkArrowUpBracket };
