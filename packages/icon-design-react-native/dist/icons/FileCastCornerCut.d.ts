import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCastCornerCut: ForwardRefExoticComponent<FileCastCornerCutProps & RefAttributes<Svg>>;

export default FileCastCornerCut;
export { FileCastCornerCut };
