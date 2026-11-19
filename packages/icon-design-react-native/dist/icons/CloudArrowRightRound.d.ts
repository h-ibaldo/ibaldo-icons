import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowRightRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowRightRound: ForwardRefExoticComponent<CloudArrowRightRoundProps & RefAttributes<Svg>>;

export default CloudArrowRightRound;
export { CloudArrowRightRound };
