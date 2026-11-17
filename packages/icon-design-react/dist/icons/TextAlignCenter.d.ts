import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAlignCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAlignCenter: ForwardRefExoticComponent<TextAlignCenterProps & RefAttributes<SVGSVGElement>>;

export default TextAlignCenter;
export { TextAlignCenter };
