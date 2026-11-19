import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlain2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlain2: ForwardRefExoticComponent<WindowPlain2Props & RefAttributes<Svg>>;

export default WindowPlain2;
export { WindowPlain2 };
