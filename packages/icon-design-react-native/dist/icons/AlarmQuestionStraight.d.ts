import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmQuestionStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmQuestionStraight: ForwardRefExoticComponent<AlarmQuestionStraightProps & RefAttributes<Svg>>;

export default AlarmQuestionStraight;
export { AlarmQuestionStraight };
