import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareDashed: ForwardRefExoticComponent<DownloadSquareDashedProps & RefAttributes<Svg>>;

export default DownloadSquareDashed;
export { DownloadSquareDashed };
