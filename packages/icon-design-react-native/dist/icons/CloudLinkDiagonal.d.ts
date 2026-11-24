import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLinkDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLinkDiagonal: ForwardRefExoticComponent<CloudLinkDiagonalProps & RefAttributes<Svg>>;

export default CloudLinkDiagonal;
export { CloudLinkDiagonal };
