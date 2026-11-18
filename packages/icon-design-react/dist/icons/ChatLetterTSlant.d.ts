import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLetterTSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetterTSlant: ForwardRefExoticComponent<ChatLetterTSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatLetterTSlant;
export { ChatLetterTSlant };
