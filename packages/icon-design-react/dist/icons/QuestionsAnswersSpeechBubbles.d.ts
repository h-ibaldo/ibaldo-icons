import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionsAnswersSpeechBubblesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionsAnswersSpeechBubbles: ForwardRefExoticComponent<QuestionsAnswersSpeechBubblesProps & RefAttributes<SVGSVGElement>>;

export default QuestionsAnswersSpeechBubbles;
export { QuestionsAnswersSpeechBubbles };
