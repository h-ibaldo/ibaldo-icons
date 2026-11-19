import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSettings: ForwardRefExoticComponent<FileSettingsProps & RefAttributes<Svg>>;

export default FileSettings;
export { FileSettings };
