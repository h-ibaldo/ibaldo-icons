import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderSearch: ForwardRefExoticComponent<FolderSearchProps & RefAttributes<Svg>>;

export default FolderSearch;
export { FolderSearch };
