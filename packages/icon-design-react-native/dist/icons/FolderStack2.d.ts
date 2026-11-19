import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderStack2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderStack2: ForwardRefExoticComponent<FolderStack2Props & RefAttributes<Svg>>;

export default FolderStack2;
export { FolderStack2 };
