import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DSyncChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DSyncChevron: ForwardRefExoticComponent<Text3DSyncChevronProps & RefAttributes<Svg>>;

export default Text3DSyncChevron;
export { Text3DSyncChevron };
