import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXCircleRound: ForwardRefExoticComponent<LinkXCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkXCircleRound;
export { LinkXCircleRound };
