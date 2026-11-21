import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCornerWide: ForwardRefExoticComponent<FilePlusCornerWideProps & RefAttributes<Svg>>;

export default FilePlusCornerWide;
export { FilePlusCornerWide };
