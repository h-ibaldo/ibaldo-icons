import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownloadRound: ForwardRefExoticComponent<CloudDownloadRoundProps & RefAttributes<Svg>>;

export default CloudDownloadRound;
export { CloudDownloadRound };
