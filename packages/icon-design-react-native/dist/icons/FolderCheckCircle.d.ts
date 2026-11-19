import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderCheckCircle: ForwardRefExoticComponent<FolderCheckCircleProps & RefAttributes<Svg>>;

export default FolderCheckCircle;
export { FolderCheckCircle };
