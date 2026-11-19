import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadTrayStepProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadTrayStep: ForwardRefExoticComponent<DownloadTrayStepProps & RefAttributes<Svg>>;

export default DownloadTrayStep;
export { DownloadTrayStep };
