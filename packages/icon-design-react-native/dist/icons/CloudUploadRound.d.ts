import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadRound: ForwardRefExoticComponent<CloudUploadRoundProps & RefAttributes<Svg>>;

export default CloudUploadRound;
export { CloudUploadRound };
