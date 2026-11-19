import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderAjarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderAjar: ForwardRefExoticComponent<FolderAjarProps & RefAttributes<Svg>>;

export default FolderAjar;
export { FolderAjar };
