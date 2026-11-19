import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderMinus: ForwardRefExoticComponent<FolderMinusProps & RefAttributes<Svg>>;

export default FolderMinus;
export { FolderMinus };
