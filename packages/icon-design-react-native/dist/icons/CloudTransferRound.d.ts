import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTransferRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTransferRound: ForwardRefExoticComponent<CloudTransferRoundProps & RefAttributes<Svg>>;

export default CloudTransferRound;
export { CloudTransferRound };
