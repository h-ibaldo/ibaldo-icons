import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearDownloadRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearDownloadRound: ForwardRefExoticComponent<GearDownloadRoundProps & RefAttributes<Svg>>;

export default GearDownloadRound;
export { GearDownloadRound };
