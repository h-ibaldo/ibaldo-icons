import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextYProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextY: ForwardRefExoticComponent<TextYProps & RefAttributes<SVGSVGElement>>;

export default TextY;
export { TextY };
