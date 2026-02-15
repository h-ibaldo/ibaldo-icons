import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FaqSpeechBubblesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FaqSpeechBubbles: ForwardRefExoticComponent<FaqSpeechBubblesProps & RefAttributes<SVGSVGElement>>;

export default FaqSpeechBubbles;
export { FaqSpeechBubbles };
