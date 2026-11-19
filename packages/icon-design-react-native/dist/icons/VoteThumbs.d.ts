import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteThumbsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteThumbs: ForwardRefExoticComponent<VoteThumbsProps & RefAttributes<Svg>>;

export default VoteThumbs;
export { VoteThumbs };
