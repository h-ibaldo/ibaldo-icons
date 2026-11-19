import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlusRound: ForwardRefExoticComponent<CloudPlusRoundProps & RefAttributes<Svg>>;

export default CloudPlusRound;
export { CloudPlusRound };
