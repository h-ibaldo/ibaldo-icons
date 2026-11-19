import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudRefreshCornerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudRefreshCornerRound: ForwardRefExoticComponent<CloudRefreshCornerRoundProps & RefAttributes<Svg>>;

export default CloudRefreshCornerRound;
export { CloudRefreshCornerRound };
