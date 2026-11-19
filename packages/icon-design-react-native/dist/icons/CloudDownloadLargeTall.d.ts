import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudDownloadLargeTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudDownloadLargeTall: ForwardRefExoticComponent<CloudDownloadLargeTallProps & RefAttributes<Svg>>;

export default CloudDownloadLargeTall;
export { CloudDownloadLargeTall };
