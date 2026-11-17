import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll6SpeechBubbleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll6SpeechBubble: ForwardRefExoticComponent<Poll6SpeechBubbleProps & RefAttributes<SVGSVGElement>>;

export default Poll6SpeechBubble;
export { Poll6SpeechBubble };
