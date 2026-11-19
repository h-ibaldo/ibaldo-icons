import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUploadBaseRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUploadBaseRound: ForwardRefExoticComponent<CloudUploadBaseRoundProps & RefAttributes<Svg>>;

export default CloudUploadBaseRound;
export { CloudUploadBaseRound };
