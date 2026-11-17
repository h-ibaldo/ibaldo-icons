import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatQuestionSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatQuestionSlant: ForwardRefExoticComponent<ChatQuestionSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatQuestionSlant;
export { ChatQuestionSlant };
