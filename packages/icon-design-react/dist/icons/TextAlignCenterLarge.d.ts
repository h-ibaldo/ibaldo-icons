import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignCenterLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignCenterLarge: ForwardRefExoticComponent<TextAlignCenterLargeProps & RefAttributes<SVGSVGElement>>;

export default TextAlignCenterLarge;
export { TextAlignCenterLarge };
