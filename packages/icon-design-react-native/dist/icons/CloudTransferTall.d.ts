import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTransferTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTransferTall: ForwardRefExoticComponent<CloudTransferTallProps & RefAttributes<Svg>>;

export default CloudTransferTall;
export { CloudTransferTall };
