import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextNCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextNCircle: ForwardRefExoticComponent<TextNCircleProps & RefAttributes<SVGSVGElement>>;

export default TextNCircle;
export { TextNCircle };
