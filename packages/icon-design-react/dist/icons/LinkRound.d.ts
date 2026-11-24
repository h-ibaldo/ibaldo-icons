import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRound: ForwardRefExoticComponent<LinkRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkRound;
export { LinkRound };
