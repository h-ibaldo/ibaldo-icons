import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownRoyalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownRoyal: ForwardRefExoticComponent<CrownRoyalProps & RefAttributes<Svg>>;

export default CrownRoyal;
export { CrownRoyal };
