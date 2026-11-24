import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderMinusCircle: ForwardRefExoticComponent<FolderMinusCircleProps & RefAttributes<Svg>>;

export default FolderMinusCircle;
export { FolderMinusCircle };
