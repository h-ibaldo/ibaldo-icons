import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ComputerTowerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ComputerTower: ForwardRefExoticComponent<ComputerTowerProps & RefAttributes<Svg>>;

export default ComputerTower;
export { ComputerTower };
