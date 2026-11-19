import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeTranslateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeTranslate: ForwardRefExoticComponent<VolumeTranslateProps & RefAttributes<Svg>>;

export default VolumeTranslate;
export { VolumeTranslate };
