import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CastRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CastRound: ForwardRefExoticComponent<CastRoundProps & RefAttributes<SVGSVGElement>>;

export default CastRound;
export { CastRound };
