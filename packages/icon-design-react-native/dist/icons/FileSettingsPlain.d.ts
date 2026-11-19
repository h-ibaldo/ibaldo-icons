import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSettingsPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSettingsPlain: ForwardRefExoticComponent<FileSettingsPlainProps & RefAttributes<Svg>>;

export default FileSettingsPlain;
export { FileSettingsPlain };
