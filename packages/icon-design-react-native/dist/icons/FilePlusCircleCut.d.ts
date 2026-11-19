import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCircleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCircleCut: ForwardRefExoticComponent<FilePlusCircleCutProps & RefAttributes<Svg>>;

export default FilePlusCircleCut;
export { FilePlusCircleCut };
