import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMusicDoubleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMusicDoubleCut: ForwardRefExoticComponent<FileMusicDoubleCutProps & RefAttributes<Svg>>;

export default FileMusicDoubleCut;
export { FileMusicDoubleCut };
