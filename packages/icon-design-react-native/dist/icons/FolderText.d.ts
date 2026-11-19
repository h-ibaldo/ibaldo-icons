import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderText: ForwardRefExoticComponent<FolderTextProps & RefAttributes<Svg>>;

export default FolderText;
export { FolderText };
