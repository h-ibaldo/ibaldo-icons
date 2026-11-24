import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileDatabaseCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileDatabaseCut: ForwardRefExoticComponent<FileDatabaseCutProps & RefAttributes<Svg>>;

export default FileDatabaseCut;
export { FileDatabaseCut };
