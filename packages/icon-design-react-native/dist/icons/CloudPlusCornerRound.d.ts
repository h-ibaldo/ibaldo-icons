import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlusCornerRound: ForwardRefExoticComponent<CloudPlusCornerRoundProps & RefAttributes<Svg>>;

export default CloudPlusCornerRound;
export { CloudPlusCornerRound };
