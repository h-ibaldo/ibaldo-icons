import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderHeart: ForwardRefExoticComponent<FolderHeartProps & RefAttributes<Svg>>;

export default FolderHeart;
export { FolderHeart };
