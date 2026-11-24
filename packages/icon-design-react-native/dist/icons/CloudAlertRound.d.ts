import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudAlertRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudAlertRound: ForwardRefExoticComponent<CloudAlertRoundProps & RefAttributes<Svg>>;

export default CloudAlertRound;
export { CloudAlertRound };
