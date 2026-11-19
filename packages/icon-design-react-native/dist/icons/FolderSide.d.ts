import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderSide: ForwardRefExoticComponent<FolderSideProps & RefAttributes<Svg>>;

export default FolderSide;
export { FolderSide };
