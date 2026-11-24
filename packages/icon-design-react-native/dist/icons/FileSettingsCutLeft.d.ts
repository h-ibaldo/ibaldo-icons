import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSettingsCutLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSettingsCutLeft: ForwardRefExoticComponent<FileSettingsCutLeftProps & RefAttributes<Svg>>;

export default FileSettingsCutLeft;
export { FileSettingsCutLeft };
