import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpDownRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpDownRound: ForwardRefExoticComponent<CloudArrowUpDownRoundProps & RefAttributes<Svg>>;

export default CloudArrowUpDownRound;
export { CloudArrowUpDownRound };
