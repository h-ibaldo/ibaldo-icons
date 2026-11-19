import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadLargeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadLargeRound: ForwardRefExoticComponent<CloudUploadLargeRoundProps & RefAttributes<Svg>>;

export default CloudUploadLargeRound;
export { CloudUploadLargeRound };
