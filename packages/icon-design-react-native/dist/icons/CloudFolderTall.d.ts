import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudFolderTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudFolderTall: ForwardRefExoticComponent<CloudFolderTallProps & RefAttributes<Svg>>;

export default CloudFolderTall;
export { CloudFolderTall };
