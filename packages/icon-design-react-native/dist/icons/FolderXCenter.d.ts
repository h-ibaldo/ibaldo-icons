import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderXCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderXCenter: ForwardRefExoticComponent<FolderXCenterProps & RefAttributes<Svg>>;

export default FolderXCenter;
export { FolderXCenter };
