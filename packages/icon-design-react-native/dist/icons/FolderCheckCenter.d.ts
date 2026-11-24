import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderCheckCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderCheckCenter: ForwardRefExoticComponent<FolderCheckCenterProps & RefAttributes<Svg>>;

export default FolderCheckCenter;
export { FolderCheckCenter };
