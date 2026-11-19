import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudWarningRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudWarningRound: ForwardRefExoticComponent<CloudWarningRoundProps & RefAttributes<Svg>>;

export default CloudWarningRound;
export { CloudWarningRound };
