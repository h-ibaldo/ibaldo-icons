import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonRound: ForwardRefExoticComponent<MoonRoundProps & RefAttributes<SVGSVGElement>>;

export default MoonRound;
export { MoonRound };
