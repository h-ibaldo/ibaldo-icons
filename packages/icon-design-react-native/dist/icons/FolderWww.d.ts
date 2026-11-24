import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderWwwProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderWww: ForwardRefExoticComponent<FolderWwwProps & RefAttributes<Svg>>;

export default FolderWww;
export { FolderWww };
