import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCornerCut: ForwardRefExoticComponent<FilePlusCornerCutProps & RefAttributes<Svg>>;

export default FilePlusCornerCut;
export { FilePlusCornerCut };
