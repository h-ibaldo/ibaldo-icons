import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AwardOneRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AwardOneRound: ForwardRefExoticComponent<AwardOneRoundProps & RefAttributes<SVGSVGElement>>;

export default AwardOneRound;
export { AwardOneRound };
