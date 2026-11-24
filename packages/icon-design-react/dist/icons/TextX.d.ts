import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextX: ForwardRefExoticComponent<TextXProps & RefAttributes<SVGSVGElement>>;

export default TextX;
export { TextX };
