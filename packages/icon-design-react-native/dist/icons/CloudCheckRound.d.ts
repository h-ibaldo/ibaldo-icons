import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudCheckRound: ForwardRefExoticComponent<CloudCheckRoundProps & RefAttributes<Svg>>;

export default CloudCheckRound;
export { CloudCheckRound };
