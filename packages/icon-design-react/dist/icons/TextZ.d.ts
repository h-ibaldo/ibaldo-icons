import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextZ: ForwardRefExoticComponent<TextZProps & RefAttributes<SVGSVGElement>>;

export default TextZ;
export { TextZ };
