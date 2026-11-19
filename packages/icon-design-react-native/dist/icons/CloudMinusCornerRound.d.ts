import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinusCornerRound: ForwardRefExoticComponent<CloudMinusCornerRoundProps & RefAttributes<Svg>>;

export default CloudMinusCornerRound;
export { CloudMinusCornerRound };
