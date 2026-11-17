import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AwardCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AwardCheckRound: ForwardRefExoticComponent<AwardCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default AwardCheckRound;
export { AwardCheckRound };
