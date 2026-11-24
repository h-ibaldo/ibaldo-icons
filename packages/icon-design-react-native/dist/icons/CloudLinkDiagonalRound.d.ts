import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLinkDiagonalRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLinkDiagonalRound: ForwardRefExoticComponent<CloudLinkDiagonalRoundProps & RefAttributes<Svg>>;

export default CloudLinkDiagonalRound;
export { CloudLinkDiagonalRound };
