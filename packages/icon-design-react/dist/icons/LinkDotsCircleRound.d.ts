import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleRound: ForwardRefExoticComponent<LinkDotsCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleRound;
export { LinkDotsCircleRound };
