import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignLeftLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignLeftLarge: ForwardRefExoticComponent<TextAlignLeftLargeProps & RefAttributes<SVGSVGElement>>;

export default TextAlignLeftLarge;
export { TextAlignLeftLarge };
