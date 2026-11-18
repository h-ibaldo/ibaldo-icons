import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleRound: ForwardRefExoticComponent<LinkCheckCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleRound;
export { LinkCheckCircleRound };
