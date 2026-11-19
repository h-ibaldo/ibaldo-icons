import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudEyeRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudEyeRound: ForwardRefExoticComponent<CloudEyeRoundProps & RefAttributes<Svg>>;

export default CloudEyeRound;
export { CloudEyeRound };
