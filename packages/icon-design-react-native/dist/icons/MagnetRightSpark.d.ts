import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MagnetRightSparkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MagnetRightSpark: ForwardRefExoticComponent<MagnetRightSparkProps & RefAttributes<Svg>>;

export default MagnetRightSpark;
export { MagnetRightSpark };
