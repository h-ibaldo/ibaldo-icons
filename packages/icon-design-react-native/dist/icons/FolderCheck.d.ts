import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderCheck: ForwardRefExoticComponent<FolderCheckProps & RefAttributes<Svg>>;

export default FolderCheck;
export { FolderCheck };
