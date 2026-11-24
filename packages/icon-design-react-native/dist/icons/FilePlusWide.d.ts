import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusWide: ForwardRefExoticComponent<FilePlusWideProps & RefAttributes<Svg>>;

export default FilePlusWide;
export { FilePlusWide };
