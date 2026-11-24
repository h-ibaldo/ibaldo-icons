import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuestionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuestion: ForwardRefExoticComponent<ChatQuestionProps & RefAttributes<SVGSVGElement>>;

export default ChatQuestion;
export { ChatQuestion };
