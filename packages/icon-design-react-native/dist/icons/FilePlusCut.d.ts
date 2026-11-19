import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCut: ForwardRefExoticComponent<FilePlusCutProps & RefAttributes<Svg>>;

export default FilePlusCut;
export { FilePlusCut };
