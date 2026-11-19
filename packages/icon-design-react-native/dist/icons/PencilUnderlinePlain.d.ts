import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilUnderlinePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilUnderlinePlain: ForwardRefExoticComponent<PencilUnderlinePlainProps & RefAttributes<Svg>>;

export default PencilUnderlinePlain;
export { PencilUnderlinePlain };
