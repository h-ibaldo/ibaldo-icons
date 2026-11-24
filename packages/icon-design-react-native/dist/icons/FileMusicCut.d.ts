import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMusicCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMusicCut: ForwardRefExoticComponent<FileMusicCutProps & RefAttributes<Svg>>;

export default FileMusicCut;
export { FileMusicCut };
