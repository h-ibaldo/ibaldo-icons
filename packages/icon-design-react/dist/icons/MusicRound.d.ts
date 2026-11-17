import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicRound: ForwardRefExoticComponent<MusicRoundProps & RefAttributes<SVGSVGElement>>;

export default MusicRound;
export { MusicRound };
