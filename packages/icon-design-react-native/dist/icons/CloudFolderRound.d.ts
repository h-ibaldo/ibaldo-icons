import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudFolderRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudFolderRound: ForwardRefExoticComponent<CloudFolderRoundProps & RefAttributes<Svg>>;

export default CloudFolderRound;
export { CloudFolderRound };
