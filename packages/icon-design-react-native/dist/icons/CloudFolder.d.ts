import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudFolderProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudFolder: ForwardRefExoticComponent<CloudFolderProps & RefAttributes<Svg>>;

export default CloudFolder;
export { CloudFolder };
