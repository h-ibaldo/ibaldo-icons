import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadLargeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownloadLargeRound: ForwardRefExoticComponent<CloudDownloadLargeRoundProps & RefAttributes<Svg>>;

export default CloudDownloadLargeRound;
export { CloudDownloadLargeRound };
