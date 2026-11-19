import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderDividerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderDivider: ForwardRefExoticComponent<FolderDividerProps & RefAttributes<Svg>>;

export default FolderDivider;
export { FolderDivider };
