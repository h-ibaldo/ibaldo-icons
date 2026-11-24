import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderInnerLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderInnerLabel: ForwardRefExoticComponent<FolderInnerLabelProps & RefAttributes<Svg>>;

export default FolderInnerLabel;
export { FolderInnerLabel };
