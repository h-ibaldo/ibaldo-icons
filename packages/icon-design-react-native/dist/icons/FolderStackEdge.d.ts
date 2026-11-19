import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderStackEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderStackEdge: ForwardRefExoticComponent<FolderStackEdgeProps & RefAttributes<Svg>>;

export default FolderStackEdge;
export { FolderStackEdge };
