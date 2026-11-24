import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderStack: ForwardRefExoticComponent<FolderStackProps & RefAttributes<Svg>>;

export default FolderStack;
export { FolderStack };
