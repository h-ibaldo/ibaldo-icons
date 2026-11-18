import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersRound: ForwardRefExoticComponent<ChatLettersRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersRound;
export { ChatLettersRound };
