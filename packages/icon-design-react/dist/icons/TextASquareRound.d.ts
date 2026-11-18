import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextASquareRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextASquareRound: ForwardRefExoticComponent<TextASquareRoundProps & RefAttributes<SVGSVGElement>>;

export default TextASquareRound;
export { TextASquareRound };
