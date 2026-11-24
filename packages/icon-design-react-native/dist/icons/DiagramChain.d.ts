import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DiagramChainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DiagramChain: ForwardRefExoticComponent<DiagramChainProps & RefAttributes<Svg>>;

export default DiagramChain;
export { DiagramChain };
