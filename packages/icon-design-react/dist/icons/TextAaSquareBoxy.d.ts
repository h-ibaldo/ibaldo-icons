import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAaSquareBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAaSquareBoxy: ForwardRefExoticComponent<TextAaSquareBoxyProps & RefAttributes<SVGSVGElement>>;

export default TextAaSquareBoxy;
export { TextAaSquareBoxy };
