import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudHappyRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudHappyRound: ForwardRefExoticComponent<CloudHappyRoundProps & RefAttributes<Svg>>;

export default CloudHappyRound;
export { CloudHappyRound };
