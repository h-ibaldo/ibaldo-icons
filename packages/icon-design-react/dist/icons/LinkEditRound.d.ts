import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditRound: ForwardRefExoticComponent<LinkEditRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkEditRound;
export { LinkEditRound };
