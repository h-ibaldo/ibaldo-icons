import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicSixteenthRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicSixteenthRound: ForwardRefExoticComponent<MusicSixteenthRoundProps & RefAttributes<SVGSVGElement>>;

export default MusicSixteenthRound;
export { MusicSixteenthRound };
