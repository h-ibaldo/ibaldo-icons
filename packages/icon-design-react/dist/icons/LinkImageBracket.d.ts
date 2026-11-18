import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkImageBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkImageBracket: ForwardRefExoticComponent<LinkImageBracketProps & RefAttributes<SVGSVGElement>>;

export default LinkImageBracket;
export { LinkImageBracket };
