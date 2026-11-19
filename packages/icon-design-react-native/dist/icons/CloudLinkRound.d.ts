import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLinkRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLinkRound: ForwardRefExoticComponent<CloudLinkRoundProps & RefAttributes<Svg>>;

export default CloudLinkRound;
export { CloudLinkRound };
