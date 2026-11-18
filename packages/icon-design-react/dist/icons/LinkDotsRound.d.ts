import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsRound: ForwardRefExoticComponent<LinkDotsRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsRound;
export { LinkDotsRound };
