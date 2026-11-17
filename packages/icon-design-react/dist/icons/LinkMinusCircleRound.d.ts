import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleRound: ForwardRefExoticComponent<LinkMinusCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleRound;
export { LinkMinusCircleRound };
