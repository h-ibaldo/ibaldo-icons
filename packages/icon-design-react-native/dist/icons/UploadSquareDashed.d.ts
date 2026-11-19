import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareDashed: ForwardRefExoticComponent<UploadSquareDashedProps & RefAttributes<Svg>>;

export default UploadSquareDashed;
export { UploadSquareDashed };
