import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCut: ForwardRefExoticComponent<FileCutProps & RefAttributes<Svg>>;

export default FileCut;
export { FileCut };
