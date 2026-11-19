import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTransferProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTransfer: ForwardRefExoticComponent<CloudTransferProps & RefAttributes<Svg>>;

export default CloudTransfer;
export { CloudTransfer };
