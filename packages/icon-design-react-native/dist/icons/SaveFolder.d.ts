import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveFolderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveFolder: ForwardRefExoticComponent<SaveFolderProps & RefAttributes<Svg>>;

export default SaveFolder;
export { SaveFolder };
