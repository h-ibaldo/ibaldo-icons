import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCastCut: ForwardRefExoticComponent<FileCastCutProps & RefAttributes<Svg>>;

export default FileCastCut;
export { FileCastCut };
