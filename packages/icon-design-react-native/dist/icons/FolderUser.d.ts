import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderUser: ForwardRefExoticComponent<FolderUserProps & RefAttributes<Svg>>;

export default FolderUser;
export { FolderUser };
