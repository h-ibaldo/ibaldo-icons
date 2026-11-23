import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileOffWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileOffWide: ForwardRefExoticComponent<FileOffWideProps & RefAttributes<Svg>>;

export default FileOffWide;
export { FileOffWide };
