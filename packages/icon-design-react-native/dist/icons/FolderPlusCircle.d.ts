import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderPlusCircle: ForwardRefExoticComponent<FolderPlusCircleProps & RefAttributes<Svg>>;

export default FolderPlusCircle;
export { FolderPlusCircle };
