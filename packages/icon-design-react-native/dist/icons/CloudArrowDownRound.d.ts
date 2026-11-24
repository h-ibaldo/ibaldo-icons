import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowDownRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowDownRound: ForwardRefExoticComponent<CloudArrowDownRoundProps & RefAttributes<Svg>>;

export default CloudArrowDownRound;
export { CloudArrowDownRound };
