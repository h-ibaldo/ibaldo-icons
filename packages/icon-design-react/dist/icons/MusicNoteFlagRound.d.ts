import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteFlagRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteFlagRound: ForwardRefExoticComponent<MusicNoteFlagRoundProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteFlagRound;
export { MusicNoteFlagRound };
