import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMinusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMinusRound: ForwardRefExoticComponent<CloudMinusRoundProps & RefAttributes<Svg>>;

export default CloudMinusRound;
export { CloudMinusRound };
