import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AwardRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AwardRound: ForwardRefExoticComponent<AwardRoundProps & RefAttributes<SVGSVGElement>>;

export default AwardRound;
export { AwardRound };
