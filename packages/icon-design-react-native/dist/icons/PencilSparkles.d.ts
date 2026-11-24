import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilSparklesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilSparkles: ForwardRefExoticComponent<PencilSparklesProps & RefAttributes<Svg>>;

export default PencilSparkles;
export { PencilSparkles };
