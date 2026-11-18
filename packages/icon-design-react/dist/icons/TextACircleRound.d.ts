import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextACircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextACircleRound: ForwardRefExoticComponent<TextACircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TextACircleRound;
export { TextACircleRound };
